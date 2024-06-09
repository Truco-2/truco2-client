import React from 'react';

import { Outlet } from 'react-router-dom';
import MainContainer from '../components/MainContainer/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import { Container } from '@mui/material';
import useIsMobile from 'hooks/UseIsMobile';

const Root: React.FC = () => {
    const { isMobile } = useIsMobile();

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
