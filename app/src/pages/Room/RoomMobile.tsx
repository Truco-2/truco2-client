import React from 'react';
import { Box, Typography } from '@mui/material';
import { IRoomScreen } from 'types/Room';
import styles from './Room.module.scss';
import PlayerListTable from 'components/Table/PlayerListTable/PlayerListTable';
import { FormButton } from 'components/ui/Button';
import HeaderMobile from 'components/ui/HeaderMobile/HeaderMobile';

const RoomMobile: React.FC<IRoomScreen> = ({
    handleJoinRoom,
    roomInformations,
    view,
}) => {
    return (
        <Box className={styles.mobileContainer}>
            <HeaderMobile />
            <div className={styles.img} />
            <Box className={styles.containerMobile}>
                <Box className={styles.roomContainer}>
                    <>
                        {view && (
                            <>
                                <Typography className={styles.title}>
                                    Jogadores em sala
                                </Typography>
                                <Typography className={styles.text}>
                                    Os jogadores listados estão na sala do jogo
                                </Typography>
                            </>
                        )}

                        <Box className={styles.playersListContainer}>
                            {roomInformations && (
                                <PlayerListTable room={roomInformations} />
                            )}
                        </Box>

                        {view && (
                            <FormButton
                                width="15.5rem"
                                onClick={handleJoinRoom}
                            >
                                Entrar na sala
                            </FormButton>
                        )}
                    </>
                </Box>
            </Box>
        </Box>
    );
};

export default RoomMobile;
