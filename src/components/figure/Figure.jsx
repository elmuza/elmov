import React from 'react'
import styles from './figure.module.scss'

export const Figure = ({service: {img, alt, figcaption}}) => {
  return (
    <figure className={`figure ${styles.page3Figure}`}>
      <img src={img} alt={alt} className='img-fluid  mx-auto d-flex align-items-start' />
      <figcaption className={`${styles.caption} text-center overflow-wrap`}>{figcaption}</figcaption>
    </figure>
  )
}