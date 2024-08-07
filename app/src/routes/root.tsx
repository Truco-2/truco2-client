import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import MainContainer from '../components/MainContainer/MainContainer';
import Sidebar from '../components/Sidebar/Sidebar';
import { Box, Container, useMediaQuery } from '@mui/material';
import SocketProvider from 'contexts/SocketContext';
import MatchSocketProvider from 'contexts/MatchSocketContext';
import HeaderMobile from 'components/ui/HeaderMobile/HeaderMobile';

const Root: React.FC = () => {
    const isMobile = useMediaQuery('(max-width:800px)');

    const location = useLocation();

    return (
        <SocketProvider>
            <MatchSocketProvider>
                <React.Fragment>
                    {isMobile ? (
                        <div>
                            <HeaderMobile />
                            <div style={{ marginTop: '4rem' }}>
                                <Outlet />
                            </div>
                        </div>
                    ) : (
                        <MainContainer>
                            <Sidebar />

                            {location.pathname.includes('match') ? (
                                <Box sx={{ flex: '1' }}>
                                    <Outlet />
                                </Box>
                            ) : (
                                <Container
                                    maxWidth="xl"
                                    sx={{ marginBlock: '1%' }}
                                >
                                    <Outlet />
                                </Container>
                            )}
                        </MainContainer>
                    )}
                </React.Fragment>
            </MatchSocketProvider>
        </SocketProvider>
    );
};

export default Root;
