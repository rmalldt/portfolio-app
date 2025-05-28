import React, { useState } from 'react';
import styles from './side-nav.module.css';
import { IconType } from 'react-icons';
import { FaCode } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';
import { FaBriefcase } from 'react-icons/fa6';
import { FaBolt } from 'react-icons/fa6';
import { FaGamepad } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSoundcloud } from 'react-icons/fa6';

type SideNavProps = {
  sidebarIsOpen: boolean;
  onSetSidebarClose: () => void;
};

const SideNav: React.FC<SideNavProps> = ({
  sidebarIsOpen,
  onSetSidebarClose,
}) => {
  return (
    <aside
      className={
        sidebarIsOpen ? `${styles.sidebar} ${styles.open}` : `${styles.sidebar}`
      }
    >
      <ul>
        <SideNavItem
          title="Rupesh Mall"
          link="/rm#intro"
          icon={FaCode}
          fill="var(--color-grey-700)"
          key="intro"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="Home"
          link="/"
          icon={FaHouse}
          fill="var(--color-grey-700)"
          key="home"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="About"
          link="/rm#about"
          icon={FaUser}
          fill="var(--color-grey-700)"
          key="about"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="Experience"
          link="/rm#experience"
          icon={FaBriefcase}
          fill="var(--color-grey-700)"
          key="experience"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="Skills"
          link="/rm#skills"
          icon={FaBolt}
          fill="var(--color-grey-700)"
          key="skills"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="Hobbies"
          link="/rm#hobbies"
          icon={FaGamepad}
          fill="var(--color-grey-700)"
          key="hobbies"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="GitHub"
          link="https://github.com/rmalldt"
          icon={FaGithub}
          fill="var(--color-grey-700)"
          target="_blank"
          rel="noopener noreferrer"
          key="github"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="LinkedIn"
          link="https://www.linkedin.com/in/rupesh-mall-367aa51bb/"
          icon={FaLinkedin}
          fill="var(--color-grey-700)"
          target="_blank"
          rel="noopener noreferrer"
          key="linkedin"
          onItemClick={onSetSidebarClose}
        />
        <SideNavItem
          title="Soundcloud"
          link="https://soundcloud.com/beholdarctic"
          icon={FaSoundcloud}
          fill="var(--color-grey-700)"
          target="_blank"
          rel="noopener noreferrer"
          key="soundlcloud"
          onItemClick={onSetSidebarClose}
        />
      </ul>
    </aside>
  );
};

type SideNavItemProps = {
  title: string;
  link: string;
  icon: IconType;
  fill: string;
  target?: string;
  rel?: string;
  onItemClick: () => void;
};

const SideNavItem: React.FC<SideNavItemProps> = ({
  title,
  link,
  icon: Icon,
  fill,
  target = '',
  rel = '',
  onItemClick,
}) => {
  return (
    <li onClick={onItemClick}>
      <a href={link} target={target} rel={rel}>
        <span className={styles.icon}>
          <Icon size={17} fill={fill} stroke={fill} />
        </span>
        <span className={styles.title}>{title}</span>
      </a>
    </li>
  );
};

export default SideNav;
