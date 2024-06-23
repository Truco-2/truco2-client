import React from 'react';
import { Box, Typography } from '@mui/material';
import { FormButton } from 'components/ui/Button';
import { TextField } from 'components/ui/TextField';
import { IJoinRoomScreen } from 'types/Room';
import styles from './JoinRoom.module.scss';
import HeaderMobile from 'components/ui/HeaderMobile/HeaderMobile';

const JoinRoomMobile: React.FC<IJoinRoomScreen> = ({
    handleJoinRoom,
    handleSubmit,
    register,
}) => {
    return (
        <Box className={styles.mobileContainer}>
            <HeaderMobile />
            <div className={styles.img} />
            <form
                onSubmit={handleSubmit(handleJoinRoom)}
                className={styles.containerMobile}
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
        </Box>
    );
};

export default JoinRoomMobile;
