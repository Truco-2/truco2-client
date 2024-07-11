import React from 'react';
import { Box, FormControlLabel, Typography } from '@mui/material';
import { FormButton } from 'components/ui/Button';
import { ICreateRoomScreen } from 'types/Room';
import styles from './CreateRoom.module.scss';
import { StyledSwitch } from 'components/ui/Switch';
import { TextField } from 'components/ui/TextField';

const CreateRoomMobile: React.FC<ICreateRoomScreen> = ({
    handleSubmit,
    handleCreateRoom,
    register,
    watch,
}) => {
    return (
        <Box className={styles.mobileContainer}>
            <div className={styles.img} />
            <form
                onSubmit={handleSubmit(handleCreateRoom)}
                className={styles.createRoomMobileContainer}
            >
                <Typography className={styles.title}>Criar Sala</Typography>
                <Typography className={styles.description}>
                    Crie a sala que você irá jogar
                </Typography>
                <Box className={styles.inputContainer}>
                    <Typography className={styles.inputLabel}>Nome</Typography>

                    <TextField
                        {...register('name')}
                        placeholder="Nome da Sala"
                    />
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
                        <Typography className={styles.inputLabel}>
                            Senha
                        </Typography>
                        <TextField {...register('password')} type="password" />
                    </Box>
                )}

                <FormButton type="submit" width="12rem">
                    Criar Sala
                </FormButton>
            </form>
        </Box>
    );
};

export default CreateRoomMobile;
