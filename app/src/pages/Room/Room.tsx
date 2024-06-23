import React, { useCallback, useEffect, useState } from 'react';

import { useMediaQuery } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';

import { exitRoom, informationRoom, joinRoom } from 'services/Room';

import { IRoomList } from 'types/Room';

import useSocket from 'hooks/useSocket';
import { createMatch } from 'services/Match';
import RoomMobile from './RoomMobile';
import RoomDesktop from './RoomDesktop';

interface IRoomProps {
    view?: boolean;
}

const Room: React.FC<IRoomProps> = ({ view = false }) => {
    const [roomInformations, setRoomInformations] = useState<IRoomList>();
    const [password, setPassword] = useState<string>('');

    const { code } = useParams();

    const navigate = useNavigate();

    const { socket } = useSocket();

    const isOwner = true;

    const handlePass = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = e.target.value;

        setPassword(value);
    };
    const isMobile = useMediaQuery('(max-width:800px)');

    const handleJoinRoom = () => {
        joinRoom(
            (response) => {
                if (response.status === 201) {
                    navigate(`/room/${code}`);
                }
            },
            { code: code ?? '', password }
        );
    };

    const handleInitMatch = () => {
        console.log('Iniciando jogo');

        createMatch((response) => {
            if (response.status === 201) {
                const matchId = '';

                navigate(`/match/${matchId}`);
            }
        });
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
                console.log('here');

                getRoomInformations(code ?? '');
            });

            socket.on('match-update', (id: string) => {
                navigate(`/match/${id}`);
            });
        }
    }, [socket, code, getRoomInformations, navigate]);

    return (
        <>
            {isMobile ? (
                <RoomMobile
                    roomInformations={roomInformations}
                    view={view}
                    handleJoinRoom={handleJoinRoom}
                    password={password}
                    handleInitMatch={handleInitMatch}
                    isOwner={isOwner}
                    handlePass={handlePass}
                    handleLeaveRoom={handleLeaveRoom}
                />
            ) : (
                <RoomDesktop
                    roomInformations={roomInformations}
                    view={view}
                    handleJoinRoom={handleJoinRoom}
                    password={password}
                    handleInitMatch={handleInitMatch}
                    isOwner={isOwner}
                    handlePass={handlePass}
                    handleLeaveRoom={handleLeaveRoom}
                />
            )}
        </>
    );
};

export default Room;
