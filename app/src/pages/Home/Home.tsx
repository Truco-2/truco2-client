import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRoomList } from 'types/Room';
import { getRooms } from 'services/Room';
import useIsMobile from 'hooks/UseIsMobile';
import HomeDesktop from './HomeDestktop';
import HomeMobile from './HomeMobile';

const Home: React.FC = () => {
    const [rooms, setRooms] = useState<IRoomList[]>([]);

    const navigate = useNavigate();

    const { isMobile } = useIsMobile();

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
