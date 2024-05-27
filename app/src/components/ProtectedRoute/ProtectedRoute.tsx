import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { getCookies } from 'helpers/cookies.ts';

interface IProtectedRoute {
    isPublic: boolean;
}

const isAuthenticated = () => {
    return getCookies('userToken');
};

const ProtectedRoute: React.FC<IProtectedRoute> = ({ isPublic }) => {
    if (isPublic === false && !isAuthenticated())
        return <Navigate to={'/login'} />;

    return <Outlet />;
};

export default ProtectedRoute;
