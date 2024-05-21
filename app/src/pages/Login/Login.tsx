import React from 'react';

import styles from './Login.module.scss';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const Login: React.FC = () => {
    return (
        <Box className={styles.container}>
            <Container component="main" maxWidth="md">
                <Paper sx={{ borderRadius: '20%' }}>
                    <Grid container spacing={2}>
                        <Grid sx={{ backgroundColor: '#DC8230' }} item xs={8}>
                            <Typography>TRUCO 2</Typography>
                        </Grid>
                        <Grid sx={{ backgroundColor: '#131420' }} item xs={4}>
                            <Typography>Entrar</Typography>

                            <Typography>
                                Cadastre-se agora e tenha acesso a conteúdos
                                exclusivos!
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
