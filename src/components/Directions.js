import React from 'react';
import { motion } from 'framer-motion';
import './Directions.css';

const Directions = () => {
  return (
    <section id="directions" className="directions">
      <div className="directions-content">

      <motion.div 
          className="directions-title-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>Направление работы</h2>
        </motion.div>

        <motion.div 
          className="directions-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p>
          В моей практике есть два вектора:
          Частная психологическая практика и консультирование по вопросам сексуальной сферы.
          </p>
          <p>
          В направлении сексологии я работаю со взрослыми людьми(18+), но если вы родитель и 
          хотите выстроить доверительные отношения со своим ребенком, открыто говорить 
          с ним о сексуальной жизни для вас у меня есть специальный блок консультаций, где мы вместе простроим диалог с вашим подростком.
          </p>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Directions;
