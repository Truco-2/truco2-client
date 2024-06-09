import React from 'react';

import { Outlet } from 'react-router-dom';
import MainContainer from '../components/MainContainer/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import { Container, useMediaQuery } from '@mui/material';

const Root: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    return (
        <React.Fragment>
            {isMobile ? (
                <Outlet />
            ) : (
                <MainContainer>
                    <Sidebar />
                    <Container maxWidth="xl" sx={{ marginTop: '1%' }}>
                        <Outlet />
                    </Container>
                </MainContainer>
            )}
        </React.Fragment>
    );
};

export default Root;
