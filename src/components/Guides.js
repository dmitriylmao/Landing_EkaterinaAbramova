import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Guides.css';
import pdf1 from "../pdf/Первый_секс_разговор_с_подростком.pdf";
import pdf2 from "../pdf/Дети.Интимная_безопасность.pdf";
import pdfIMG from "../img/pdf.png";
import guideImage1 from "../img/pdf1.png";
import guideImage2 from "../img/pdf2.png";

const guidesData = [
  {
    title: 'Первый секс. Разговор с подростком',
    description: '',
    pdfLink: pdf1,
    image: guideImage1
  },
  {
    title: 'Дети. Правила интимной безопасности',
    description: '',
    pdfLink: pdf2,
    image: guideImage2
  },
];

const GuideItem = ({ title, description, pdfLink, image, index }) => {
  const [progress, setProgress] = useState(0);
  const guideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const guideElement = guideRef.current;
      if (!guideElement) return;

      const rect = guideElement.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      const progressValue = Math.max(0, Math.min(100, (rect.top / viewHeight) * 160));
      setProgress(100 - progressValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [guideRef]);

  return (
    <div
      id={`guide-${index}`}
      className="guide-item"
      ref={guideRef}
    >
      {/* Прогресс-бар в левой части карточки */}
      <div
        className="progress-bar"
        style={{ height: `${progress}%` }}
      />

      <img 
        src={image} 
        alt={title} 
        className="guide-image" 
      />

      <div className="guide-content">
        <h33>{title}</h33>
        <p>{description}</p>

        {/* Кнопка без анимаций */}
        <a
          href={pdfLink}
          download
          className="download-btn"
        >
            <span>Скачать PDF</span> {/* Текст теперь после картинки */}
          <img 
            src={pdfIMG} 
            alt="pdf icon"
            className="pdf-icon"
            style={{ width: '20px', height: '20px', marginRight: '10px' }} // Уменьшаем картинку PDF
          />
          
        </a>
      </div>
    </div>
  );
};

const Guides = () => {
  return (
    <section id="guides" className="guides">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      > 
        <h2 className="guides-title">Полезная информация от меня</h2>
        <h2 className="guides-title2">Для самостоятельного изучения я составила для вас удобные гайды на тему подготовки подростка к первому сексу и интимной безопасности детей дошкольного возраста</h2>
      </motion.div>
      
      <div className="guides-list">
        {guidesData.map((guide, index) => (
          <GuideItem
            key={index}
            index={index}
            title={guide.title}
            description={guide.description}
            pdfLink={guide.pdfLink}
            image={guide.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Guides;
