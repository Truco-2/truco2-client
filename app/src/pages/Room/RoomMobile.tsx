import React from 'react';
import { Box, Typography } from '@mui/material';
import { IRoomScreen } from 'types/Room';
import styles from './Room.module.scss';
import PlayerListTable from 'components/Table/PlayerListTable/PlayerListTable';
import { FormButton } from 'components/ui/Button';
import { TextField } from 'components/ui/TextField';

const RoomMobile: React.FC<IRoomScreen> = ({
    handleJoinRoom,
    roomInformations,
    view,
    handleInitMatch,
    handleLeaveRoom,
    handlePass,
    isOwner,
    password,
}) => {
    return (
        <Box className={styles.mobileContainer}>
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

                        {view ? (
                            <>
                                {roomInformations?.isPrivate && (
                                    <Box className={styles.inputContainer}>
                                        <Typography
                                            className={styles.inputLabel}
                                        >
                                            Senha
                                        </Typography>
                                        <TextField
                                            value={password}
                                            onChange={handlePass}
                                            type="password"
                                            fullWidth
                                        />
                                    </Box>
                                )}
                                <FormButton
                                    width="15.5rem"
                                    onClick={handleJoinRoom}
                                >
                                    Entrar na sala
                                </FormButton>
                            </>
                        ) : (
                            <Box className={styles.buttonsBox}>
                                {isOwner && (
                                    <FormButton
                                        width="15.5rem"
                                        onClick={handleInitMatch}
                                    >
                                        Iniciar o jogo
                                    </FormButton>
                                )}

                                <FormButton
                                    width="15.5rem"
                                    onClick={() => handleLeaveRoom()}
                                >
                                    Sair da sala
                                </FormButton>
                            </Box>
                        )}
                    </>
                </Box>
            </Box>
        </Box>
    );
};

export default RoomMobile;
