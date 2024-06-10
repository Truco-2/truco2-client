import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRoomList } from 'types/Room';
import { getRooms } from 'services/Room';
import HomeDesktop from './HomeDestktop';
import HomeMobile from './HomeMobile';
import { useMediaQuery } from '@mui/material';
import useSocket from 'hooks/useSocket';

const Home: React.FC = () => {
    const [rooms, setRooms] = useState<IRoomList[]>([]);

    const navigate = useNavigate();

    const { socket } = useSocket();

    const isMobile = useMediaQuery('(max-width:800px)');

    const getRoomsList = useCallback(() => {
        getRooms(({ status, data }) => {
            if (status === 200) {
                setRooms(data.data);
            } else {
                setRooms([]);
            }
        });
    }, []);

    useEffect(() => {
        getRoomsList();
    }, [getRoomsList]);

    const handleSocketRoom = (payload: string) => {
        getRoomsList();

        console.log('payload: ', payload);
    };

    useEffect(() => {
        socket.emit('enter-available-room-listing');

        socket.on('available-rooms-list-msg', handleSocketRoom);

        socket.on('error', () => {
            console.log('error');
        });
    }, [socket]);

    return (
        <React.Fragment>
            {isMobile ? (
                <HomeMobile navigate={navigate} rooms={rooms} />
            ) : (
                <HomeDesktop navigate={navigate} rooms={rooms} />
            )}
        </React.Fragment>
    );
};

export default Home;
