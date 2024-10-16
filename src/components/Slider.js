import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules'; // Импорт навигации и пагинации
import { motion } from 'framer-motion';
import './Slider.css';

import i1 from '../sliderimg/1.png';
import i2 from '../sliderimg/2.png';
import i3 from '../sliderimg/3.png';
import i4 from '../sliderimg/4.png';

const images = [
  i1,
  i2,
  i3,
  i4,
  // добавь свои изображения
];

const Slider = () => {
  // Состояние для отслеживания увеличенного состояния изображения
  const [zoomedIndex, setZoomedIndex] = useState(null);

  // Функция для обработки нажатия на изображение
  const handleImageClick = (index) => {
    // Если клик на изображение, которое уже увеличено — уменьшить, иначе увеличить
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <section id="slider" className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true} // Включаем навигацию (стрелки)
        pagination={{ clickable: true }} // Включаем пагинацию
        modules={[Navigation, Pagination]} // Убедимся, что подключаем модули
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="slide-content"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: zoomedIndex === index ? 1.3 : 1, // Увеличение до 1.5 при зуме
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }} // Плавная анимация
              onClick={() => handleImageClick(index)} // Обработка клика для увеличения/уменьшения
            >
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
