import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './Home.module.scss';

import EnterRoomIcon from 'assets/EnterRoomIcon.svg';

import { Box, InputAdornment, Typography } from '@mui/material';

import RoomListTable from 'components/Table/RoomListTable/RoomListTable';
import { ActionButton } from 'components/ui/Button';
import { FilterTextField, TextField } from 'components/ui/TextField';

import { AccountCircle, Add, Search } from '@mui/icons-material';

import { IRoomList } from 'types/Room';

import { axiosInstance } from 'helpers/axiosHelper';
import { LIST_ROOM_PATH } from 'helpers/apiHelper';

const Home: React.FC = () => {
    const [rooms, setRooms] = useState<IRoomList[]>([]);

    const navigate = useNavigate();

    const getRooms = useCallback(async () => {
        const { data, status } = await axiosInstance.get(LIST_ROOM_PATH);

        if (status === 200) {
            setRooms(data.data);
        } else {
            setRooms([]);
        }
    }, []);

    useEffect(() => {
        getRooms();
    }, []);

    useEffect(() => {
        console.log('rooms: ', rooms);
    }, [rooms]);

    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>Jogar</Typography>

            <Box className={styles.buttonsBox}>
                <ActionButton
                    buttoncolor="var(--primary-color)"
                    onClick={() => navigate('/room/create')}
                >
                    Criar Sala
                    <Add />
                </ActionButton>

                <ActionButton
                    buttoncolor="var(--secondary-color)"
                    onClick={() => navigate('/room/join')}
                >
                    Entrar em Sala
                    <EnterRoomIcon />
                </ActionButton>
            </Box>

            <Typography className={styles.title}>Salas</Typography>

            <FilterTextField
                sx={{ width: '35%' }}
                placeholder="Pesquisar sala"
            />

            {rooms.length > 0 ? (
                <Box sx={{ width: '70%' }}>
                    <RoomListTable rooms={rooms} />
                </Box>
            ) : null}
        </Box>
    );
};

export default Home;
