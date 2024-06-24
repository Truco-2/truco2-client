import React from 'react';
import { Box, Typography } from '@mui/material';
import PlayerListTable from 'components/Table/PlayerListTable/PlayerListTable';
import { FormButton } from 'components/ui/Button';
import { IRoomScreen } from 'types/Room';
import styles from './Room.module.scss';
import { TextField } from 'components/ui/TextField';

const RoomDesktop: React.FC<IRoomScreen> = ({
    roomInformations,
    view,
    handleJoinRoom,
    password,
    handleInitMatch,
    isOwner,
    handlePass,
    handleLeaveRoom,
}) => {
    return (
        <Box className={styles.containerDesktop}>
            <Box className={styles.playersListContainer}>
                {roomInformations && (
                    <PlayerListTable room={roomInformations} />
                )}
            </Box>

            {view ? (
                <Box className={styles.roomContainer}>
                    <Typography className={styles.title}>
                        Jogadores em sala
                    </Typography>

                    <Typography className={styles.text}>
                        Os jogadores listados estao na sala do jogo
                    </Typography>

                    {roomInformations?.isPrivate && (
                        <Box className={styles.inputContainer}>
                            <Typography className={styles.inputLabel}>
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

                    <FormButton width="15.5rem" onClick={handleJoinRoom}>
                        Entrar na sala
                    </FormButton>
                </Box>
            ) : (
                <Box className={styles.roomContainer}>
                    <Typography className={styles.title}>
                        {isOwner ? 'Esperando Líder' : 'Iniciar jogo'}
                    </Typography>

                    <Typography className={styles.text}>
                        Os jogadores listados estao na sala do jogo
                    </Typography>

                    <Box className={styles.buttonsBox}>
                        {isOwner && (
                            <FormButton
                                width="15.5rem"
                                onClick={handleInitMatch}
                            >
                                Iniciar o jogo
                            </FormButton>
                        )}

                        <FormButton width="15.5rem" onClick={handleLeaveRoom}>
                            Sair da sala
                        </FormButton>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default RoomDesktop;
