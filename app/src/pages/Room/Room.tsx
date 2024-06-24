import React, { useCallback, useEffect, useState } from 'react';

import styles from './Room.module.scss';

import { Box, Typography } from '@mui/material';

import PlayerListTable from 'components/Table/PlayerListTable/PlayerListTable';
import { FormButton } from 'components/ui/Button';

import { useNavigate, useParams } from 'react-router-dom';

import { exitRoom, informationRoom, joinRoom } from 'services/Room';

import { IRoomList } from 'types/Room';

import useSocket from 'hooks/useSocket';

interface IRoomProps {
    view?: boolean;
}

const Room: React.FC<IRoomProps> = ({ view = false }) => {
    const [roomInformations, setRoomInformations] = useState<IRoomList>();

    const { code } = useParams();

    const navigate = useNavigate();

    const { socket } = useSocket();

    const isOwner = true;

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

    const handleInitMatch = () => {
        console.log('Iniciando jogo');
    };

    const handleLeaveRoom = () => {
        exitRoom((response) => {
            if (response.status === 201) {
                navigate('/');
            }
        });
    };

    const getRoomInformations = useCallback(
        (code: string) => {
            informationRoom((response) => {
                if (response.status === 200) {
                    const data = response.data.data;

                    setRoomInformations(data);
                } else {
                    navigate('/home');
                }
            }, code);
        },
        [navigate]
    );

    useEffect(() => {
        if (code) {
            getRoomInformations(code);
        }
    }, [code, getRoomInformations]);

    useEffect(() => {
        if (socket?.connected) {
            socket.emit('enter-available-room-listing');

            socket.on('available-rooms-list-msg', () => {
                getRoomInformations(code ?? '');
            });
        }
    }, [socket, code, getRoomInformations]);

    return (
        <Box className={styles.container}>
            <Box className={styles.playersListContainer}>
                {roomInformations && (
                    <PlayerListTable room={roomInformations} />
                )}
            </Box>

            {view ? (
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
            ) : (
                <Box className={styles.joinRoomContainer}>
                    <Typography className={styles.title}>
                        {isOwner ? 'Esperando Líder' : 'Iniciar jogo'}
                    </Typography>

                    <Typography className={styles.text}>
                        Os jogadores listados estao na sala do jogo
                    </Typography>

                    <Box className={styles.buttonsBox}>
                        {isOwner && (
                            <FormButton
                                width="15.5rem"
                                onClick={handleInitMatch}
                            >
                                Iniciar o jogo
                            </FormButton>
                        )}

                        <FormButton width="15.5rem" onClick={handleLeaveRoom}>
                            Sair da sala
                        </FormButton>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Room;
