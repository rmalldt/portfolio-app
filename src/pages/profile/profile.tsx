import React from 'react';
import { IconType } from 'react-icons';
import { FaCode } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import styles from './profile.module.css';
import profileImage from '../../assets/profile.jpg';
import profile from '../../assets/profile.json';

const ProfilePage: React.FC = () => {
  const { about, experiences, skillsets } = profile;

  return (
    <div className={styles.profile}>
      <section className={styles.intro}>
        <div className={styles.profileImg}>
          <img src={profileImage} alt="Profile picture" />
        </div>
        <div className={styles.salut}>
          <h3>Hello everyone, I am Rupesh!</h3>
          <span>Software Engineer</span>
          <a href="#about">
            <button className={styles.btn}>About me</button>
          </a>
        </div>
      </section>
      <section className={styles.about} id="about">
        <h3 className={styles.heading}>
          <span>About me</span>
        </h3>
        <div className={styles.aboutMe}>
          <p>{about}</p>
          <div className={styles.tags}>
            <h3>
              <span>Originally from: </span>Nepal (ILR Holder)
            </h3>
            <h3>
              <span>Email: </span>rmall.dt@gmail.com
            </h3>
            <h3>
              <span>Based in: </span>West London
            </h3>
            <h3>
              <span>Languages: </span>English, Nepali, Hindi
            </h3>
            <h3>
              <span>Education: </span>BSc. Computer Science (Software
              Engineering)
            </h3>
          </div>
        </div>
      </section>
      <section className={styles.experience} id="experience">
        <h3 className={styles.heading}>
          <span>Experience</span>
        </h3>
        <div className={styles.experienceContainer}>
          <ExperienceBox
            role={experiences[0].role}
            company={experiences[0].company}
            date={experiences[0].date}
            description={experiences[0].description}
            icon={FaCog}
            fill="var(--color-blue-400)"
          />
          <ExperienceBox
            role={experiences[1].role}
            company={experiences[1].company}
            date={experiences[1].date}
            description={experiences[1].description}
            icon={FaCode}
            fill="var(--color-blue-400)"
          />
          <ExperienceBox
            role={experiences[2].role}
            company={experiences[2].company}
            date={experiences[2].date}
            description={experiences[2].description}
            icon={FaMobileAlt}
            fill="var(--color-blue-400)"
          />
          <ExperienceBox
            role={experiences[3].role}
            company={experiences[3].company}
            date={experiences[3].date}
            description={experiences[3].description}
            icon={FaCode}
            fill="var(--color-blue-400)"
          />
          <ExperienceBox
            role={experiences[4].role}
            company={experiences[4].company}
            date={experiences[4].date}
            description={experiences[4].description}
            icon={FaMobileAlt}
            fill="var(--color-blue-400)"
          />
        </div>
      </section>
      <section className={styles.skills} id="skills">
        <h3 className={styles.heading}>
          <span>Skills</span>
        </h3>
        <div className={styles.skillsContainer}>
          <SkillBox
            skill="Language"
            items={skillsets.languages}
            icon={FaCode}
            fill="var(--color-blue-400)"
          />
          <SkillBox
            skill="Libraries"
            items={skillsets.libraries}
            icon={FaArchive}
            fill="var(--color-blue-400)"
          />
          <SkillBox
            skill="Tools"
            items={skillsets.tools}
            icon={FaTools}
            fill="var(--color-blue-400)"
          />
          <SkillBox
            skill="Databases"
            items={skillsets.databases}
            icon={FaDatabase}
            fill="var(--color-blue-400)"
          />
          <SkillBox
            skill="Cloud services"
            items={skillsets['cloud services']}
            icon={FaCloud}
            fill="var(--color-blue-400)"
          />
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

type ExperienceBoxProps = {
  role: string;
  company: string;
  description: string;
  date: string;
  icon: IconType;
  fill: string;
};

const ExperienceBox: React.FC<ExperienceBoxProps> = ({
  role,
  company,
  description,
  date,
  icon: Icon,
  fill,
}) => {
  return (
    <div className={styles.experienceBox}>
      <Icon size={40} fill={fill} stroke={fill} />
      <h3>
        {role} - <span>{company}</span>
      </h3>
      <p className={styles.date}>{date}</p>
      <p>{description}</p>
    </div>
  );
};

type SkillBoxProps = {
  skill: string;
  items: string[];
  icon: IconType;
  fill: string;
};

const SkillBox: React.FC<SkillBoxProps> = ({
  skill,
  items,
  icon: Icon,
  fill,
}) => {
  return (
    <div className={styles.skillBox}>
      <Icon size={40} fill={fill} stroke={fill} />
      <h3>{skill}</h3>
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
