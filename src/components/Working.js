import React from 'react';
import { motion } from 'framer-motion';
import './Working.css';

const Working = () => {
  return (
    <section id="working" className="working">
      <div className="working-content">
        {/* Анимация для заголовка, аналогичная предыдущему разделу */}
        <motion.div
          className="working-title-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>С чем я работаю?</h2>
        </motion.div>

        {/* Анимация для текста, с появлением слева */}
        <motion.div
          className="working-text"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ul>
            <li>Cложности в отношениях с партнером, близкими, коллегами</li>
            <li>Развод, завершение отношений</li>
            <li>Поиск себя, реализация своего потенциала</li>
            <li>Адаптация при переезде, смене деятельности</li>
            <li>Неуверенность в себе, сложности с самооценкой</li>
            <li>Финансовые темы</li>
            <li>Утрата, потеря близкого</li>
            <li>Сложности в сексуальной жизни</li>
          </ul>
          <p>А также я работаю с любыми темами, в которых вам нужна поддержка и опора.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Working;
