import React from 'react';
import { Box, Typography } from '@mui/material';
import { FormButton } from 'components/ui/Button';
import styles from './JoinRoom.module.scss';
import { IJoinRoomScreen } from 'types/Room';
import { TextField } from 'components/ui/TextField';

const JoinRoomDesktop: React.FC<IJoinRoomScreen> = ({
    handleSubmit,
    handleJoinRoom,
    register,
}) => {
    return (
        <form
            onSubmit={handleSubmit(handleJoinRoom)}
            className={styles.containerDesktop}
        >
            <Typography className={styles.title}>Entrar em sala</Typography>

            <Box className={styles.textFieldContainer}>
                <Typography>Código para entrar em sala</Typography>

                <TextField
                    className={styles.codeInput}
                    {...register('code')}
                    placeholder="Código"
                />
            </Box>

            <FormButton width="15rem" type="submit">
                Entrar na sala
            </FormButton>
        </form>
    );
};

export default JoinRoomDesktop;
