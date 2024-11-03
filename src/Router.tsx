import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SystemTypePage from './pages/SystemTypePage/SystemType.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SystemTypePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
