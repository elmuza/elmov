import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import styles from './myMap.module.scss'

export const MyMap = () => {
  return (
    <div className={styles.mapContainer}>
      <YMaps>
        <Map 
          state={{
            center: [55.889581, 37.555988],
            zoom: 13,
          }}
          className={styles.map}
        >
          <Placemark
            options={{hasHint:true}}
            name='Name'
            geometry={[55.889581, 37.555988]}
            properties={{
              hintContent: 'г.Москва ул. Дубнинская д. 79 стр. 2.',
              balloonContent: 'Тел. +7(905)589-97-27',
              balloonContentHeader: 'г.Москва ул. Дубнинская д. 79 стр. 2',
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        </Map>
      </YMaps>
    </div>
  )
}