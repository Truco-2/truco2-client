import React from 'react';

import { Outlet } from 'react-router-dom';
import MainContainer from '../components/MainContainer/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import { Container, useMediaQuery } from '@mui/material';
import SocketProvider from 'contexts/SocketContext';
import MatchSocketProvider from 'contexts/MatchSocketContext';

const Root: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    return (
        <SocketProvider>
            <MatchSocketProvider>
                <React.Fragment>
                    {isMobile ? (
                        <Outlet />
                    ) : (
                        <MainContainer>
                            <Sidebar />
                            <Container maxWidth="xl" sx={{ marginBlock: '1%' }}>
                                <Outlet />
                            </Container>
                        </MainContainer>
                    )}
                </React.Fragment>
            </MatchSocketProvider>
        </SocketProvider>
    );
};

export default Root;
