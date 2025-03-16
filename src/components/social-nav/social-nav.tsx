import React from 'react';

import { IconType } from 'react-icons';

import { FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import { SiSoundcloud } from 'react-icons/si';
import styles from './social-nav.module.css';

const SocialNav: React.FC = () => {
  return (
    <ul className={styles.section}>
      <SocialNavLink link="https://github.com/rmalldt" icon={SiGithub} />
      <SocialNavLink
        link="https://www.linkedin.com/in/rupesh-mall-367aa51bb/"
        icon={FaLinkedin}
      />
      <SocialNavLink
        link="https://soundcloud.com/beholdarctic"
        icon={SiSoundcloud}
      />
    </ul>
  );
};

export default SocialNav;

type SocialNavLinkType = {
  link: string;
  icon: IconType;
};

const SocialNavLink: React.FC<SocialNavLinkType> = ({ link, icon: Icon }) => {
  return (
    <li className={styles.icon}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon size={20} fill="black" stroke="black" />
      </a>
    </li>
  );
};
