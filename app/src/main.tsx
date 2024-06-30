import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
    RouterProvider,
    Navigate,
    createBrowserRouter,
} from 'react-router-dom';

import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';

import Root from 'routes/root';

import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import CreateRoom from 'pages/Room/Create/CreateRoom';
import JoinRoom from 'pages/Room/Join/JoinRoom';
import Room from 'pages/Room/Room';
import Match from 'pages/Match/Match';
import MatchSocketProvider from 'contexts/MatchSocketContext';

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
                            {
                                path: 'join',
                                element: <JoinRoom />,
                            },
                            {
                                path: 'view/:code',
                                element: <Room view={true} />,
                            },
                            {
                                path: ':code',
                                element: <Room />,
                            },
                        ],
                    },
                    {
                        path: 'match',
                        children: [
                            {
                                path: ':id',
                                element: (
                                    <MatchSocketProvider>
                                        <Match />
                                    </MatchSocketProvider>
                                ),
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
