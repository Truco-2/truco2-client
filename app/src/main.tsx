import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    RouterProvider,
    Navigate,
    createBrowserRouter,
} from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import Root from 'routes/root';
import CreateRoom from 'pages/Room/Create/CreateRoom';

const router = createBrowserRouter([
    {
        element: <ProtectedRoute isPublic={true} />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
    {
        element: <ProtectedRoute isPublic={false} />,
        children: [
            {
                path: '/',
                element: <Root />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: 'room',
                        children: [
                            {
                                path: 'create',
                                element: <CreateRoom />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { path: '*', element: <Navigate to="/" /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
