import React from 'react'
import styles from './myArrow.module.scss'

export const Arrow = ({ link, hideLine }) => {
  return (
    <>
      <div className='container-fluid d-flex justify-content-center'>
        <a href={link} className={styles.arrow}>
          <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg" className='img-responsive'>
            <path d="M60.7048 27.1252L34.0124 50.1658L7.31992 27.1215C5.64657 25.6672 2.92861 25.6672 1.25526 27.1215C-0.418094 28.5757 -0.418094 30.93 1.25526 32.3805L30.9802 58.0394C32.5897 59.434 35.4312 59.4414 37.0491 58.0394L66.774 32.3768C68.4474 30.9262 68.4474 28.5683 66.774 27.1178C65.0961 25.6712 62.3781 25.6712 60.7048 27.1252Z" fill="#8B9395"/>
            <path d="M30.9799 32.0086C32.5894 33.4032 35.4309 33.4106 37.0489 32.0086L66.7738 6.34972C68.4471 4.89546 68.4471 2.54125 66.7738 1.0907C65.1004 -0.363565 62.3825 -0.363565 60.7091 1.0907L34.0125 24.1313L7.31968 1.0907C5.64633 -0.363565 2.92837 -0.363565 1.25501 1.0907C-0.418338 2.54496 -0.418338 4.89917 1.25501 6.34972L30.9799 32.0086Z" fill="#8B9395"/>
          </svg>
        </a>
      </div>
    
      {!hideLine && (
        <div className='container-fluid d-flex justify-content-center'>
          <div className={styles.line} />
        </div>
      )}  
    </>
  )
}
