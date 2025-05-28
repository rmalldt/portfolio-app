import React, { useEffect, useState } from 'react';
import styles from './scroll-totop.module.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  console.log(window.scrollY);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  });

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
