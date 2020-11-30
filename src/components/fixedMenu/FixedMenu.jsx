import React from 'react'
import styles from './fixedMenu.module.scss'


export const FixedMenu = () => {
  return (
    <div className='d-none d-sm-block  sticky-top'>
      <nav className={`navbar navbar-expand-sm navbar-light absolute sticky-top bg-white ${styles.fixmenu}`}>
        <a className={`${styles.logo}`} href="#ElMov">ElMov</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav mr-auto `}>
            <li className="nav-item">
              <a className="nav-link" href="#advantages">Преимущества<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">Услуги</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#prices">Цены</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Контакты</a> 
            </li> 
          </ul>
        </div>
      </nav>
    </div>
  )
}