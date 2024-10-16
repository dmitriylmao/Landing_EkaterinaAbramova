import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Fee.css";
import imageA1 from "../img/online.png";
import imageB1 from "../img/online2.png";
import imageA2 from "../img/offline.png";
import imageB2 from "../img/offline2.png";


const cardData = [
  { id: 1, imgA: imageA1, imgB: imageB1, text: "Наша встреча проходит по видео-звонку в удобной для вас атмосфере" },
  { id: 2, imgA: imageA2, imgB: imageB2, text: "Работаем вместе с вами над решением ваших проблем" },
];

const Fee = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="fee" className="fee-container">
      <motion.div
        className="header-text-huy"
        initial={{ opacity: 0  }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h5>Как я работаю</h5>
      </motion.div>

      <motion.div
        className="fee-text-down"
        initial={{ opacity: 0  }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h11>Стоимость консультации — 3500 рублей, длительность встречи — 60 минут</h11>
      </motion.div>


      <div className="cards-wrapper">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className={`fee-card ${hovered === index ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            initial={{ scale: 1 }}
            animate={{
              scale: hovered === index ? 1.3 : 1, // Увеличение при наведении
              zIndex: hovered === index ? 10 : 1, // Передний план при наведении
              x: hovered === index ? 0 : index < hovered ? 0 : 0, // Разъезд соседей
              filter: hovered !== null && hovered !== index ? "blur(4px)" : "none", // Блюр остальных карточек
            }}
            transition={{
              duration: 0.05, // Плавное изменение масштаба и фильтра
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={hovered === index ? card.imgB : card.imgA}
              alt={`Card ${index + 1}`}
              className="card-image"
              initial={{ scale: 1 }}
              animate={{ scale: hovered === index ? 1.15 : 1 }} // Увеличение картинки при наведении
              transition={{ duration: 0.3, ease: "easeInOut" }} // Быстрая анимация изменения масштаба
            />
            <motion.div
              className="card-text-wrapper"
              initial={{ opacity: 0 }} // Изначально текст скрыт
              animate={{ opacity: hovered === index ? 1 : 0 }} // Текст появляется при наведении
              exit={{ opacity: 0 }} // Текст исчезает, когда уходим
              transition={{
                duration: 0.3, // Быстрая анимация появления текста
                ease: "easeInOut",
              }}
            >
              <p className="card-text">{card.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default Fee;
