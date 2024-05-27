import React from 'react';

import { Outlet } from 'react-router-dom';
import MainContainer from '../components/MainContainer/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import { Container } from '@mui/material';

const Root: React.FC = () => {
    return (
        <MainContainer>
            <Sidebar />
            <Container maxWidth="lg" sx={{ marginTop: '5%' }}>
                <Outlet />
            </Container>
        </MainContainer>
    );
};

export default Root;
