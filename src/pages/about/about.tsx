import styles from './about.module.css';
import profile from '../../assets/profile.json';
import React from 'react';

const AboutPage: React.FC = () => {
  const { about, education, experiences, skillsets, hobbies } = profile;

  const skills = {
    Languages: skillsets.languages.join(', '),
    ['Libraries and Frameworks']: skillsets.libraries.join(', '),
    ['Concepts and Tools']: skillsets.tools.join(', '),
    Databases: skillsets.databases.join(', '),
  };

  return (
    <section className={styles.section}>
      <div className={styles.heading}>About</div>
      <div className={styles.content}>{about}</div>

      <div className={styles.row}>
        <div className={styles.title}>Education</div>
        <ul className={styles.content}>
          {education.map(item => (
            <li key={item.level}>
              <p>
                {item.level} - {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Experiences</div>
        <ul className={styles.content}>
          {experiences.map(item => (
            <li key={item.date}>
              <p>
                {item.company}: {item.role} - {item.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Skillsets</div>
        <ul className={styles.content}>
          {Object.entries(skills).map(item => (
            <li key={item[0]}>
              <span className={styles.strong}>{item[0]}</span>: {item[1]}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Hobbies</div>
        <ul className={styles.content}>
          {hobbies.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
