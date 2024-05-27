import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './Home.module.scss';

import { Box, Typography } from '@mui/material';

import { ActionButton } from 'components/ui/Button';

import { Add } from '@mui/icons-material';
import EnterRoomIcon from 'assets/EnterRoomIcon.svg';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>Jogar</Typography>

            <Box className={styles.buttonsBox}>
                <ActionButton onClick={() => navigate('/room/create')}>
                    Criar Sala
                    <Add />
                </ActionButton>

                <ActionButton onClick={() => navigate('/room/join')}>
                    Entrar em Sala
                    <EnterRoomIcon />
                </ActionButton>
            </Box>
        </Box>
    );
};

export default Home;
