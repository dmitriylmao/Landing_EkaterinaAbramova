import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from '../img/logonavbar.JPG';
import logo1 from '../img/navbarlogoVar3.png';
import wa from '../img/whatsapp.png';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Новый state для отслеживания ширины экрана
  let lastScrollY = 0;

  // Функция для управления видимостью навбара
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    }
  };

  // Эффект для добавления обработчика события прокрутки
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Функция для отслеживания изменения ширины экрана
  const handleResize = () => {
    if (window.innerWidth < 1361) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  // Эффект для обработки изменения ширины экрана
  useEffect(() => {
    handleResize(); // Проверить размер экрана при монтировании компонента
    window.addEventListener('resize', handleResize); // Слушатель изменения ширины окна
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Функция для переключения мобильного меню
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-left">
        <Link to="header" smooth={true} duration={500}>
          <img src={isSmallScreen ? logo1 : logo} alt="Logo" className="navbar-logo" /> {/* Меняем логотип */}
        </Link>
      </div>

      <div className={`navbar-center ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {['header', 'directions', 'fee', 'guides', 'mail', 'contact'].map((section, index) => (
            <li key={index}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-50}
                onClick={() => setIsMobileMenuOpen(false)} // Закрываем меню при выборе
              >
                {section === 'header' ? 'Обо мне' :
                 section === 'directions' ? 'Направление' :
                 section === 'fee' ? 'Как я работаю' :
                 section === 'guides' ? 'Гайды' :
                 section === 'mail' ? 'Запись' :
                 'Контакты'}
              </Link>
            </li>
          ))}
          <li className="mobile-only">
            <a
              href="https://wa.me/79185900209"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Написать в WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-right desktop-only">
        <a
          href="https://wa.me/79185900209"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-icon"
        >
          <img src={wa} alt="WhatsApp" className="navbar-logo-icon" />
        </a>
      </div>

      {/* Бургер меню для мобильных устройств */}
      <div className="burger" onClick={toggleMobileMenu}>
        <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
