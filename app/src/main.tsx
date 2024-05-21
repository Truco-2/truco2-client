import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
<<<<<<< HEAD
import Login from './pages/Login/Login.tsx';
=======
import Login from './pages/Login.tsx';
>>>>>>> 735f900 (chore: Create initial route structure)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
