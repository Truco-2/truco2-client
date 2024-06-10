import React from 'react';

import styles from './CreateRoom.module.scss';

import { Box, FormControlLabel, Typography } from '@mui/material';

import { TextField } from 'components/ui/TextField';
import { StyledSwitch } from 'components/ui/Switch';
import { FormButton } from 'components/ui/Button';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { ICreateRoomData } from 'types/Room';
import { createRoom } from 'services/Room';
import { useNavigate } from 'react-router-dom';

const roomSchema = z.object({
    name: z.string(),
    maxPlayers: z.coerce.number().gte(2).lte(7),
    isPrivate: z.boolean(),
    password: z.string().optional(),
});

const CreateRoom: React.FC = () => {
    const { register, handleSubmit, watch } = useForm<ICreateRoomData>({
        resolver: zodResolver(roomSchema),
        defaultValues: {
            isPrivate: false,
        },
    });

    const navigate = useNavigate();

    const handleCreateRoom = (data: ICreateRoomData) => {
        console.log('create room data: ', data);

        createRoom((response) => {
            const code = response.data.data.code;

            if (response.status === 201) {
                navigate(`/room/${code}`);
            }
        }, data);
    };

    return (
        <form
            onSubmit={handleSubmit(handleCreateRoom)}
            className={styles.createRoomContainer}
        >
            <Typography className={styles.title}>Criar Sala</Typography>
            <Typography className={styles.description}>
                Crie a sala que você irá jogar
            </Typography>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>Nome</Typography>

                <TextField {...register('name')} placeholder="Nome da Sala" />
            </Box>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>
                    Limite de jogadores
                </Typography>
                <TextField
                    {...register('maxPlayers')}
                    type="number"
                    placeholder="De 2 a 7 jogadores"
                />
            </Box>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>
                    Modo de sala
                </Typography>

                <FormControlLabel
                    control={
                        <StyledSwitch
                            {...register('isPrivate')}
                            color="warning"
                        />
                    }
                    componentsProps={{
                        typography: {
                            color: 'var(--secondary-color)',
                        },
                    }}
                    label={watch('isPrivate') ? 'Privado' : 'Público'}
                />
            </Box>

            {watch('isPrivate') && (
                <Box className={styles.inputContainer}>
                    <Typography className={styles.inputLabel}>Senha</Typography>
                    <TextField {...register('password')} type="password" />
                </Box>
            )}

            <FormButton type="submit" width="19.75rem">
                Criar Sala
            </FormButton>
        </form>
    );
};

export default CreateRoom;
