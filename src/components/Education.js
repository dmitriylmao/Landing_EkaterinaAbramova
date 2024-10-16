import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Задержка для каждого элемента списка
        duration: 0.6
      }
    })
  };

  return (
    <section id="education" className="education">
      <div className="education-content">
        <motion.div
          className="education-title-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Образование</h2>
        </motion.div>

        <div className="education-text">
          <ul>
            {[
              'Кубанский Государственный Университет. Бакалавр «Психология» (2012-2016);',
              'Южно-Региональный Гештальт  Институт. Введение в Гештальт консультирование (135 а.ч) (2020-2021);',
              'Южно-региональный Гештальт Институт. XXII научно-практическая конференция (16 а.ч) (2020);',
              'Южно-региональный Гештальт Институт. VIII Ростовский Гештальт Интенсив (40 а.ч) (2021);',
              'Международная Академия дополнительного образования ED PRO. Основы сексологии в психологическом консультировании. Сексолог — консультант (440 ак.ч) (2021-2022).',
              
            ].map((text, i) => (
              <motion.li
                key={i}
                custom={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 , delay:0.1}}
              >
                {text}
              </motion.li>
            ))}

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 , delay:0.1}}
            >
              На данный момент продолжаю обучение:
            </motion.p>

            {[
              'Южно-региональный Гештальт Институт. Гештальт-консультирование (2 ступень) (2021 — 2025).',
            ].map((text, i) => (
              <motion.li
                key={i + 5}
                custom={i + 5}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 , delay:0.1}}
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
