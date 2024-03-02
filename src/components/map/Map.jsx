import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import styles from './myMap.module.scss'

export const MyMap = () => {
  return (
    <div className={styles.mapContainer}>
      <YMaps>
        <Map 
          state={{
            center: [55.848690, 37.597711],
            zoom: 13,
          }}
          className={styles.map}
        >
          <Placemark
            options={{hasHint:true}}
            name='Name'
            geometry={[55.848690, 37.597711]}
            properties={{
              hintContent: 'г. Москва, Сигнальный проезд дом 16 с19',
              balloonContent: 'Тел. +7(905)589-97-27',
              balloonContentHeader: 'г. Москва, Сигнальный проезд дом 16 с19',
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        </Map>
      </YMaps>
    </div>
  )
}