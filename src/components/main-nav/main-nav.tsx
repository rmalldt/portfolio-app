import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import styles from './main-nav.module.css';
import SocialNav from '../social-nav/social-nav';
import { Link, NavLink } from 'react-router';
import React, { useState } from 'react';

const MainNav = () => {
  const [sidebarIsopen, setSideIsOpen] = useState<boolean>(false);

  const handleToogleButton = () => {
    setSideIsOpen(setSideIsOpen => !setSideIsOpen);
  };

  const handleCloseSidebar = () => {
    setSideIsOpen(false);
  };

  return (
    <>
      <div
        className={
          sidebarIsopen
            ? `${styles.backdrop} ${styles.displayBlock}`
            : styles.backdrop
        }
        onClick={() => handleCloseSidebar()}
      ></div>
      <nav className={styles.mainNav}>
        <button className={styles.button} onClick={() => handleToogleButton()}>
          <FiMenu size={25} />
        </button>
        <Link to="/" className={styles.link}>
          <p className={styles.name}>Rupesh Mall</p>
        </Link>
        <div className={styles.socialSection}>
          <SocialNav />
        </div>
      </nav>
      <nav
        className={
          sidebarIsopen
            ? `${styles.mobileNav} ${styles.open}`
            : `${styles.mobileNav}`
        }
      >
        <button
          style={{ border: 'none', background: 'none', margin: '2rem 0' }}
          onClick={() => handleCloseSidebar()}
        >
          <IoMdClose size={30} />
        </button>
        <MobileNavLink
          link="/"
          label="Rupesh Mall"
          onItemClick={handleCloseSidebar}
        />
        <MobileNavLink
          link="/rm"
          label="About"
          onItemClick={handleCloseSidebar}
        />
        <MobileNavLink
          link="/rm/contact"
          label="Contact"
          onItemClick={handleCloseSidebar}
        />
        <MobileNavLink
          link="/"
          label="Resume"
          onItemClick={handleCloseSidebar}
        />
        <SocialNav />
      </nav>
    </>
  );
};

export default MainNav;

type MobileNavLinkType = {
  link: string;
  label: string;
  onItemClick: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkType> = ({
  link,
  label,
  onItemClick,
}) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? `${styles.mobileNavItem} ${styles.active}`
            : styles.mobileNavItem
        }
        onClick={onItemClick}
      >
        {label}
      </NavLink>
    </li>
  );
};
