import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <motion.div 
        className="footer-left"
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.3 }}
      >
        ©2024, Екатерина Абрамова
      </motion.div>

      <motion.div 
        className="footer-right"
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.3}}
      >
        <a href="https://vk.com/yadotdev" target="_blank" rel="noopener noreferrer">ya.dev</a>
      </motion.div>
    </section>
  );
};

export default Footer;