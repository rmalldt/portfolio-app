import { createBrowserRouter, RouterProvider } from 'react-router';

import HomePage from './pages/home/home';
import RootLayout from './pages/layout/root-layout';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';
import ErrorPage from './pages/error/error';
import ProfilePage from './pages/profile/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage isChildElement={false} />,
  },
  {
    path: '/rm',
    element: <RootLayout />,
    children: [
      { index: true, element: <ProfilePage /> },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
