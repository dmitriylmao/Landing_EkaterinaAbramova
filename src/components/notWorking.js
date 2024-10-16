import React from 'react';
import { motion } from 'framer-motion';
import './notWorking.css';

const NotWorking = () => {
  return (
    <section id="notworking" className="notworking">
      <div className="notworking-content">
      <motion.div
          className="notworking-title-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>С чем я не работаю?</h2>
        </motion.div>
        <motion.div
          className="notworking-text"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <p>К сожалению, наша работа не будет полезна, если вы ожидаете «волшебную таблетку» от терапии. 
            Терапия - это работа над собой и без вашего желания ничего не изменится.
            Так же, я не работаю с химическими и алкогольными зависимостями.</p>
        </motion.div>

        
      </div>
    </section>
  );
};

export default NotWorking;
