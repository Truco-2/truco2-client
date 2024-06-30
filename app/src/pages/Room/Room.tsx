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

interface IMatchStartData {
    id: number;
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
        createMatch((response) => {
            if (response.status === 201) {
                console.log('created');
            }
        }, code ?? '');
    };

    const handleLeaveRoom = () => {
        exitRoom((response) => {
            if (response.status === 201) {
                navigate('/');
            }
        });
    };

    const getRoomInformations = useCallback((code: string) => {
        informationRoom((response) => {
            if (response.status === 200) {
                const data = response.data.data;

                setRoomInformations(data);
            }
            // else {
            //     navigate('/home');
            // }
        }, code);
    }, []);

    useEffect(() => {
        if (code) {
            getRoomInformations(code);
        }
    }, [code, getRoomInformations]);

    const handleMatchStart = useCallback(
        (data: IMatchStartData) => {
            console.log('match start: ', data);

            const matchId = data.id;

            navigate(`/match/${matchId}`);
        },
        [navigate]
    );

    const handleRoomUpdate = (data: IRoomList) => {
        console.log('data: ', data);

        setRoomInformations(data);
    };

    useEffect(() => {
        if (socket?.connected) {
            console.log('subscribe enter-room');

            if (code) {
                socket.emit('enter-room', { code });
            }

            socket.on('room-update', handleRoomUpdate);

            socket.on('match-start', handleMatchStart);

            return () => {
                socket.off('room-update', handleRoomUpdate);

                socket.off('match-start', handleMatchStart);
            };
        }
    }, [socket, code, handleMatchStart]);

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
