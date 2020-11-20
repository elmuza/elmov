import React from 'react'
import styles from './services.module.scss'
import {Arrow } from '../arrow/Arrow'
import {services} from './data'
import {Figure } from '../figure/Figure'

export const Services = () => {
  return (
    <div className={`container-fluid ${styles.service}`} id='service' >
      <h2 className='text-center'>Предоставляем следующие виды услуг</h2>
      <div className= 'd-flex justify-content-between flex-column'>

        <div className='row justify-content-center flex-nowrap'>
          {services.slice(0, 3).map((service) => <Figure key={service.img} service={service} />)}
        </div>

        <div className='row justify-content-center flex-nowrap'>
          {services.slice(3).map((service) => <Figure  key={service.img} service={service} />)}
        </div>
      </div>

      <div>
        <h4>И многие другие виды ремонта электротранспорта!</h4> 
        <p className='question text-center'>Если  хотите узнать подробнее о наших услугах - пишите нам в Skype, WatsApp или Viber или звоните по телефону +7(905)589-97-27</p>
      </div>

      <Arrow link="#prices" />
    </div>
  )
}