import { Outlet } from 'react-router';
import MainNav from '../../components/main-nav/main-nav';
import styles from './root-layout.module.css';

function RootLayout() {
  return (
    <>
      <MainNav />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
