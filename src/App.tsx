import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import HomePage from './pages/home/home';
import RootLayout from './pages/layout/root-layout';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/rm',
    element: <RootLayout />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
