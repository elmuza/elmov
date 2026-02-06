# web-max Helm Chart

Этот Chart предназначен для развёртывания приложения `web-max` в кластере k3s на Ubuntu.

## Предварительные требования

- установленный `kubectl`, настроенный на ваш кластер k3s;
- установленный `helm` версии 3 и выше;
- при необходимости доступ к приватному реестру контейнеров.

## Структура

- `values.yaml` — значения по умолчанию;
- `templates/` — манифесты Deployment, Service, Ingress, PVC и ServiceAccount;
- `deploy.sh` — вспомогательный скрипт для установки и удаления Chart.

## Настройка

1. Обновите `values.yaml` (или создайте отдельный файл) с образами, хостами Ingress и параметрами PVC.
2. Для Traefik в k3s оставьте `ingress.className: traefik`. При использовании другого контроллера обновите значение.
3. При необходимости отключите персистентное хранилище (`persistence.enabled: false`).

## Установка

```bash
chmod +x scripts/web-max-helm.sh
./scripts/web-max-helm.sh install --namespace web-max
```

Дополнительно:

- `--values overrides.yaml` — подставить пользовательские значения;
- Переменные окружения `RELEASE_NAME`, `NAMESPACE`, `VALUES_FILE` переопределяют значения по умолчанию.

## Удаление

```bash
./scripts/web-max-helm.sh uninstall --namespace web-max
```

Helm-релиз будет удалён, а PvC останется в кластере. Удалите PVC вручную при необходимости:

```bash
kubectl delete pvc -n web-max -l app.kubernetes.io/instance=web-max
```

## Проверка доступа

```bash
kubectl get ingress -n web-max
```

Если DNS отсутствует, добавьте запись в `/etc/hosts`:

```bash
sudo sh -c 'echo "<IP k3s-ноды> web-max.local" >> /etc/hosts'
```

