import React from 'react';
import { Link } from 'react-router';
import { FiMenu } from 'react-icons/fi';

import styles from './main-nav.module.css';

type MainNavProps = {
  sidebarIsOpen: boolean;
  onToogleButton: () => void;
  onSetSidebarClose: () => void;
};

const MainNav: React.FC<MainNavProps> = ({
  sidebarIsOpen,
  onToogleButton,
  onSetSidebarClose,
}) => {
  return (
    <>
      <div
        className={
          sidebarIsOpen
            ? `${styles.backdrop} ${styles.displayBlock}`
            : styles.backdrop
        }
        onClick={onSetSidebarClose}
      ></div>

      <nav className={`${styles.mainNav} ${styles.sticky}`}>
        <button className={styles.button} onClick={onToogleButton}>
          <FiMenu
            size={25}
            fill="var(--color-grey-700)"
            stroke="var(--color-grey-700)"
          />
        </button>
        <Link to="/" className={styles.link}>
          <p className={styles.name}>Rupesh Mall</p>
        </Link>
      </nav>
    </>
  );
};

export default MainNav;
