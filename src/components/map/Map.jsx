import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import styles from './myMap.module.scss'

export const MyMap = () => {
  return (
    <div className={styles.mapContainer}>
      <YMaps>
        <Map 
          state={{
            center: [55.857442, 37.573223],
            zoom: 13,
          }}
          className={styles.map}
        >
          <Placemark
            options={{hasHint:true}}
            name='Name'
            geometry={[55.857442, 37.573223]}
            properties={{
              hintContent: 'г.Москва ул. Дубнинская д. 2А стр.4 бокс 173.',
              balloonContent: 'Тел. +7(905)589-97-27',
              balloonContentHeader: 'г.Москва ул. Дубнинская д. 2А стр.4 бокс 173',
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        </Map>
      </YMaps>
    </div>
  )
}