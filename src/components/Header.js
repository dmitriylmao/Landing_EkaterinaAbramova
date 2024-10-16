import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-scroll'; // Импортируем компонент Link
import Photo1 from '../img/header1.png';
import Photo2 from '../img/headerimg2.png';

const Header = () => {
  const [currentPhoto, setCurrentPhoto] = useState(Photo1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Если ширина экрана 768px или меньше, ставим Photo2
        setCurrentPhoto(Photo2);
      } else {
        setCurrentPhoto(Photo1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Для установки правильного изображения при загрузке

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header" className="header">
      <img src={currentPhoto} alt="Header" className="header-image" />
      
      <div className="header-text">
        <h1>Екатерина Абрамова</h1>
        <p>
          Меня зовут Екатерина Абрамова, я психолог-сексолог, гештальт терапевт.
          Занимаюсь частной практикой с 2019 года, провожу лекции и мастер-классы по психологии и сексологии.
          Для меня психология это не просто профессия, это моя жизнь.
        </p>
        <Link
          to="mail"
          smooth={true}
          duration={500}
          className="header-button"
        >
          Записаться на консультацию
        </Link>
      </div>
    </header>
  );
};

export default Header;
