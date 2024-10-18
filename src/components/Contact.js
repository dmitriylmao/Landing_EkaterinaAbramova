import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import gps from '../img/gps.png';
import mail from '../img/mail.png';
import phone from '../img/phone.png';
import tg from '../img/telegram2.png';
import wa from '../img/whatsapp2.png';
import YandexMap from './YandexMap'; // Импортируем компонент карты

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Левая половина с контактами */}
        <div className="contact-left">
          {/* Анимация заголовка "Контакты" */}
          <motion.h6
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            viewport={{ once: false }}
          >
            Контакты
          </motion.h6>

          <motion.div
            className="contact-item"
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: false }} // Анимация повторяется при каждом появлении элемента
          >
            <motion.a
              href="tel:+79185900209"
              className="contact-link"
              whileHover={{ scale: 1.05, color: '#999999' }}
              transition={{ duration: 0.05 }}
            >
              <img src={phone} alt="Phone" />
              <span>+7(918)-590-02-09</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="contact-item"
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="mailto:ekaterina_abramova1@mail.ru"
              className="contact-link"
              whileHover={{ scale: 1.05, color: '#999999' }}
              transition={{ duration: 0.05 }}
            >
              <img src={mail} alt="Email" />
              <span>ekaterina_abramova1@mail.ru</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="contact-item"
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="https://yandex.ru/maps/-/CDXCz0lY"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#999999' }}
              transition={{ duration: 0.05 }}
            >
              <img src={gps} alt="Address" />
              <span>улица Станиславского, 118</span>
            </motion.a>
          </motion.div>
          <motion.div
            className="contact-item"
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="https://wa.me/79185900209"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#999999' }}
              transition={{ duration: 0.05 }}
            >
              <img src={wa} alt="WhatsApp" />
              <span>Написать в WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>

        <div className="contact-right">
          
            <YandexMap />
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
