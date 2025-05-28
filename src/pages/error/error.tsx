import React from 'react';
import MainNav from '../../components/main-nav/main-nav';
import styles from './error.module.css';

const ErrorPage: React.FC<{ isChildElement: boolean }> = ({
  isChildElement,
}) => {
  return (
    <div>
      {!isChildElement && (
        <MainNav
          sidebarIsOpen={false}
          onToogleButton={() => {}}
          onSetSidebarClose={() => {}}
        />
      )}
      <header className={styles.heading}>
        <p>
          Page not found or something went wrong. Please try other links or try
          again later 🧐.
        </p>
      </header>
    </div>
  );
};

export default ErrorPage;
