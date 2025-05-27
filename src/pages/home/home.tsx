import React from 'react';
import { NavLink } from 'react-router';

import styles from './home.module.css';
import profileImage from '../../assets/profile.jpg';
import pdfFile from '../../assets/CV_RupeshMall.pdf';
import SocialNav from '../../components/social-nav/social-nav';
import Copyright from '../../components/copyright/copyright';

const HomePage: React.FC = () => {
  return (
    <section className={styles.background}>
      <header className={styles.header}>
        <img src={profileImage} alt="Profile Picture" />
      </header>
      <div className={styles.intro}>
        <p className={styles.name}>Rupesh Mall</p>
        <p className={styles.description}>Software Engineer</p>
      </div>
      <ul className={styles.nav}>
        <NavLink to="/rm">About</NavLink>
        <NavLink to="/rm/contact">Contact</NavLink>
        <a href={pdfFile} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </ul>
      <SocialNav />
      <footer className={styles.footer}>
        <Copyright color="var(--color-grey-0)" />
      </footer>
    </section>
  );
};

export default HomePage;
