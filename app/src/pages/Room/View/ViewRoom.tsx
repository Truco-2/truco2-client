import React, { useEffect } from 'react';

import styles from './ViewRoom.module.scss';

import { Box, Typography } from '@mui/material';

import { FormButton } from 'components/ui/Button';

import { useNavigate, useParams } from 'react-router-dom';

import { joinRoom } from 'services/Room';

const ViewRoom: React.FC = () => {
    const { code } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        console.log('code: ', code);
    }, [code]);

    const handleJoinRoom = () => {
        joinRoom((response) => {
            if (response.status === 201) {
                navigate(`/room/${code}`);
            }
        }, code ?? '');
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.playersListContainer}>
                <h1 className={styles.title}>PLAYERS LIST TABLE</h1>
            </Box>

            <Box className={styles.joinRoomContainer}>
                <Typography className={styles.title}>
                    Jogadores em sala
                </Typography>

                <Typography className={styles.text}>
                    Os jogadores listados estao na sala do jogo
                </Typography>

                <FormButton width="15.5rem" onClick={handleJoinRoom}>
                    Entrar na sala
                </FormButton>
            </Box>
        </Box>
    );
};

export default ViewRoom;
