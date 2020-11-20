import React from 'react'
import styles from './benefit.module.scss'

export const Benefits = () => {
  return (
    <>
       <ul className={styles.benefits}>
          <li id={styles.expert}>Эксперты в ремонте электротранспорта</li>
          <li id={styles.price}>Лучшие цены в городе</li>
          <li id={styles.guaranty}>Предоставляем гарантию качественного обслуживания</li>
          <li id={styles.problem}>Устраним любую проблему и предлагаем сервисное обслуживание. Мы обслуживаем все основные бренды</li>
          <li id={styles.accumulator}>Производим ремонт и замену аккумуляторов любой сложности</li>
          <li id={styles.vip}>Скидки постоянным клиентам </li>
        </ul>
    </>
 )
}