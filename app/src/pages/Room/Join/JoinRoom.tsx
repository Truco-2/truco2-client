import React from 'react';

import styles from './JoinRoom.module.scss';

import { Box, Typography } from '@mui/material';

import { TextField } from 'components/ui/TextField';
import { FormButton } from 'components/ui/Button';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { IJoinRoomData } from 'types/Room';

import { useNavigate } from 'react-router-dom';

const joinRoomSchema = z.object({
    code: z.string().length(6),
});

const JoinRoom: React.FC = () => {
    const { register, handleSubmit } = useForm<IJoinRoomData>({
        resolver: zodResolver(joinRoomSchema),
    });

    const navigate = useNavigate();

    const handleJoinRoom = (data: IJoinRoomData) => {
        navigate(`/room/view/${data.code}`);
    };

    return (
        <form
            onSubmit={handleSubmit(handleJoinRoom)}
            className={styles.container}
        >
            <Typography className={styles.title}>Entrar em sala</Typography>

            <Box className={styles.textFieldContainer}>
                <Typography>Código para entrar em sala</Typography>

                <TextField
                    sx={{ width: '50%' }}
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

export default JoinRoom;
