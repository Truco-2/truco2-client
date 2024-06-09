import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRoomList } from 'types/Room';
import { getRooms } from 'services/Room';
import HomeDesktop from './HomeDestktop';
import HomeMobile from './HomeMobile';
import { useMediaQuery } from '@mui/material';

const Home: React.FC = () => {
    const [rooms, setRooms] = useState<IRoomList[]>([]);

    const navigate = useNavigate();

    const isMobile = useMediaQuery('(max-width:800px)');

    useEffect(() => {
        getRooms(({ status, data }) => {
            if (status === 200) {
                setRooms(data.data);
            } else {
                setRooms([]);
            }
        });
    }, []);

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
