import React, { useCallback, useEffect, useState } from 'react';

import styles from './ViewRoom.module.scss';

import { Box, Typography } from '@mui/material';

import PlayerListTable from 'components/Table/PlayerListTable/PlayerListTable';
import { FormButton } from 'components/ui/Button';

import { useNavigate, useParams } from 'react-router-dom';

import { informationRoom, joinRoom } from 'services/Room';

import { IRoomList } from 'types/Room';

import useSocket from 'hooks/useSocket';

const ViewRoom: React.FC = () => {
    const [roomInformations, setRoomInformations] = useState<IRoomList>();

    const { code } = useParams();

    const navigate = useNavigate();

    const { socket } = useSocket();

    const handleJoinRoom = () => {
        joinRoom(
            (response) => {
                if (response.status === 201) {
                    navigate(`/room/${code}`);
                }
            },
            { code: code ?? '' }
        );
    };

    const getRoomInformations = useCallback((code: string) => {
        informationRoom((response) => {
            if (response.status === 200) {
                const data = response.data.data;

                setRoomInformations(data);
            }
        }, code);
    }, []);

    useEffect(() => {
        if (code) {
            getRoomInformations(code);
        }
    }, [code]);

    useEffect(() => {
        socket.emit('enter-available-room-listing');

        socket.on('available-rooms-list-msg', () => {
            getRoomInformations(code ?? '');
        });

        socket.on('error', () => {
            console.log('error');
        });
    }, [socket, code]);

    return (
        <Box className={styles.container}>
            <Box className={styles.playersListContainer}>
                {roomInformations && (
                    <PlayerListTable room={roomInformations} />
                )}
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
