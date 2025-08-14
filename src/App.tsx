import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import HomePage from './pages/home/home';
import RootLayout from './pages/layout/root-layout';

const ContactPage = lazy(() => import('./pages/contact/contact'));
const ErrorPage = lazy(() => import('./pages/error/error'));
const ProfilePage = lazy(() => import('./pages/profile/profile'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: (
      <Suspense fallback={<div className="fallback">Loading...</div>}>
        <ErrorPage isChildElement={false} />
      </Suspense>
    ),
  },
  {
    path: '/rm',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="fallback">Loading...</div>}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<div className="fallback">Loading...</div>}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
