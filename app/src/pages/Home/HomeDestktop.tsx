import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './Home.module.scss';
import { ActionButton } from 'components/ui/Button';
import { Add } from '@mui/icons-material';
import EnterRoomIcon from 'assets/EnterRoomIcon.svg';
import { IHomeScreen } from 'types/Home';
import { FilterTextField } from 'components/ui/TextField';
import RoomListTable from 'components/Table/RoomListTable/RoomListTable';

const HomeDesktop: React.FC<IHomeScreen> = ({ navigate, rooms }) => {
    return (
        <Box className={styles.homeDesktopContainer}>
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

export default HomeDesktop;
