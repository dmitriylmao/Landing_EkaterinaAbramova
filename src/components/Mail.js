import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Mail.css';
import { FaCheck } from 'react-icons/fa';
import image from '../img/abramova2.jpeg'; // Импорт изображения

const Mail = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [buttonColor, setButtonColor] = useState(''); 
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lc772eg', 'template_wcxzpzr', e.target, 'TRYaheg2WOK2JnQQ3')
      .then((result) => {
        setFormData({ name: '', phone: '' });
        setButtonColor('success');
        setShowCheckmark(true);
        setTimeout(() => {
          setButtonColor(''); 
          setShowCheckmark(false);
        }, 3000);
      }, (error) => {
        console.error('Ошибка при отправке:', error);
        setButtonColor('error');
        setTimeout(() => {
          setButtonColor(''); 
        }, 3000);
      });
  };

  return (
    <motion.section 
      id="mail" 
      className="mail"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }} 
    >
      <div className="container">
        {/* Левая часть с изображением */}
        <motion.div
          className="image-container"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <img src={image} alt="Консультация" />
        </motion.div>

        {/* Правая часть с формой */}
        <motion.div
          className="form-container"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <h8>Запись на консультацию</h8>
          
          <form onSubmit={sendEmail}>
            <h9>Если у вас есть важные вопросы, на которые пора найти ответы — запишитесь на консультацию!</h9>
            <label>
              Имя:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Номер телефона:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              className={buttonColor === 'success' ? 'success' : buttonColor === 'error' ? 'error' : ''}
            >
              {showCheckmark ? (
                <motion.span
                  className="checkmark"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheck />
                </motion.span>
              ) : (
                'Отправить'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Mail;
