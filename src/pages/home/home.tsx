import React from 'react';

import styles from './home.module.css';
import profileImage from '../../assets/profile1.jpg';
import pdfFile from '../../assets/CV_RupeshMall.pdf';
import SocialNav from '../../components/social-nav/social-nav';
import { NavLink } from 'react-router';

const HomePage: React.FC = () => {
  return (
    <section className={styles.background}>
      <header className={styles.header}>
        <img src={profileImage} alt="Profile Picture" />
      </header>
      <div className={styles.intro}>
        <p className={styles.name}>Rupesh Mall</p>
        <p className={styles.description}>Software Developer</p>
      </div>
      <ul className={styles.nav}>
        <NavLink to="/rm">About</NavLink>
        <NavLink to="/rm/contact">Contact</NavLink>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </ul>
      <footer className={styles.footer}>
        <SocialNav />
      </footer>
    </section>
  );
};

export default HomePage;
