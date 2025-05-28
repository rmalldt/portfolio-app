import { Outlet } from 'react-router';
import styles from './root-layout.module.css';
import SideNav from '../../components/side-nav/side-nav';
import MainNav from '../../components/main-nav/main-nav';
import React, { useState } from 'react';

const RootLayout: React.FC = () => {
  const [sidebarIsopen, setSideIsOpen] = useState<boolean>(false);

  const handleToogleButton = () => {
    setSideIsOpen(setSideIsOpen => !setSideIsOpen);
  };

  const handleCloseSidebar = () => {
    setSideIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <SideNav
        sidebarIsOpen={sidebarIsopen}
        onSetSidebarClose={handleCloseSidebar}
      />
      <main className={styles.main}>
        <MainNav
          sidebarIsOpen={sidebarIsopen}
          onToogleButton={handleToogleButton}
          onSetSidebarClose={handleCloseSidebar}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
