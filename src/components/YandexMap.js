import React, { useEffect } from 'react';

const YandexMap = () => {
    useEffect(() => {
        if (window.ymaps && !window.mapInitialized) {
          const initMap = () => {
            const map = new window.ymaps.Map("yandex-map", {
              center: [47.218998, 39.719395], // Ростов-на-Дону
              zoom: 17, // Можно увеличить масштаб для более детального вида
              controls: ['zoomControl', 'typeSelector'],
            });
      
            const placemark = new window.ymaps.Placemark([47.218998, 39.719395], {
              balloonContent: 'Ростов-на-Дону, ул. Московская 73',
            }, {
              iconColor: '#0099FF',
            });
      
            map.geoObjects.add(placemark);
          };
      
          window.ymaps.ready(initMap);
          window.mapInitialized = true; // Помечаем, что карта уже инициализирована
        }
      }, []);

  return <div id="yandex-map" style={{ width: "100%", height: "400px" }}></div>;
};

export default YandexMap;
