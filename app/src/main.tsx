import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root.tsx';
import Login from './pages/Login/Login.tsx';
import CreateRoom from './pages/Room/Create/CreateRoom.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/create-room',
        element: <CreateRoom />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
