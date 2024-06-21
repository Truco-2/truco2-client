import { Box, Typography } from '@mui/material';
import HeaderMobile from 'components/ui/HeaderMobile/HeaderMobile';
import React from 'react';
import styles from './Home.module.scss';
import { IHomeScreen } from 'types/Home';
import { ActionButton } from 'components/ui/Button';
import { FilterTextField } from 'components/ui/TextField';
import RoomListTable from 'components/Table/RoomListTable/RoomListTable';

const HomeMobile: React.FC<IHomeScreen> = ({ navigate, rooms }) => {
    return (
        <Box className={styles.homeMobileContainer}>
            <HeaderMobile />
            <Box className={styles.content}>
                <Typography className={styles.title}>Jogar</Typography>

                <Box className={styles.buttonsBox}>
                    <ActionButton
                        buttoncolor="var(--primary-color)"
                        onClick={() => navigate('/room/create')}
                    >
                        Criar Sala
                    </ActionButton>

                    <ActionButton
                        buttoncolor="var(--secondary-color)"
                        onClick={() => navigate('/room/join')}
                    >
                        Entrar em Sala
                    </ActionButton>
                </Box>

                <Typography className={styles.title}>Salas</Typography>

                <FilterTextField placeholder="Pesquisar sala" />

                {rooms.length > 0 ? (
                    <Box sx={{ width: '100%' }}>
                        <RoomListTable rooms={rooms} />
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
};

export default HomeMobile;
