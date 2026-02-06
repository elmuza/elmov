#!/bin/bash

ENV_FILE=".env"
if [[ -f "$ENV_FILE" ]]; then
  export $(grep -v '^#' "$ENV_FILE" | xargs)
else
  echo "Файл $ENV_FILE не найден"
  exit 1
fi

command -v helm >/dev/null 2>&1 || {
  echo >&2 "Helm не установлен. Установите его и повторите."; exit 1;
}

CHART_NAME="elmov"
CHART_DIR="./helm"
NAMESPACE="elmov"

# Берём версию из package.json
APP_VERSION=$(jq -r '.version' package.json)
if [[ -z "$APP_VERSION" || "$APP_VERSION" == "null" ]]; then
  echo "Не удалось получить версию из package.json"
  exit 1
fi

IMAGE_NAME="satilian/${CHART_NAME}:${APP_VERSION}"

function install_chart() {
  echo "🔧 Сборка локального Docker-образа..."
  docker build -t ${IMAGE_NAME} .

  echo "⬆️ Отправка образа в Docker Hub..."
  docker push ${IMAGE_NAME}

  echo "🚀 Установка Helm-чарта..."
  helm upgrade --install ${CHART_NAME} ${CHART_DIR} \
    --namespace ${NAMESPACE} \
    --create-namespace \
    --set image.tag="${APP_VERSION}"
}

function rollout_chart() {
  echo "🔄 Перезапуск подов для подтягивания образа..."
  kubectl rollout restart deployment/${CHART_NAME} --namespace ${NAMESPACE}
}

function uninstall_chart() {
  echo "🧹 Удаление Helm-чарта..."
  helm uninstall ${CHART_NAME} --namespace ${NAMESPACE}
  echo "🗑️ Удаление namespace ${NAMESPACE}..."
  kubectl delete namespace ${NAMESPACE} --ignore-not-found
}

case "$1" in
  rollout)
    rollout_chart
    ;;
  install)
    install_chart
    ;;
  uninstall)
    uninstall_chart
    ;;
  *)
    echo "Использование: $0 {install|uninstall}"
    exit 1
    ;;
esac
