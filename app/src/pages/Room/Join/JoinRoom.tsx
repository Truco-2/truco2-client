import React from 'react';

import styles from './JoinRoom.module.scss';

import { Box, Typography } from '@mui/material';

import { TextField } from 'components/ui/TextField';
import { FormButton } from 'components/ui/Button';

const JoinRoom: React.FC = () => {
    return (
        <form className={styles.container}>
            <Typography className={styles.title}>Entrar em sala</Typography>

            <Box className={styles.textFieldContainer}>
                <Typography>Código para entrar em sala</Typography>

                <TextField sx={{ width: '50%' }} placeholder="Código" />
            </Box>

            <FormButton width="15rem" type="submit">
                Criar sala
            </FormButton>
        </form>
    );
};

export default JoinRoom;
