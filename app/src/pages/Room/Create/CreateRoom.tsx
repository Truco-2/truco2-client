import { Box, Typography } from '@mui/material';
import styles from './CreateRoom.module.scss';
import { Button } from 'components/ui/Button';
import { TextField } from 'components/ui/TextField';

const CreateRoom: React.FC = () => {
    return (
        <Box className={styles.createRoomContainer}>
            <Typography className={styles.title}>Criar Sala</Typography>
            <Typography className={styles.description}>
                Crie a sala que você irá jogar
            </Typography>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>Nome</Typography>

                <TextField placeholder="Nome da Sala" fullWidth />
            </Box>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>
                    Modo de sala
                </Typography>
                <TextField placeholder="Público ou Privado" />
            </Box>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>
                    Limite de jogadores
                </Typography>
                <TextField type="number" placeholder="De 1 a 8 jogadores" />
            </Box>
            <Button primary="true" sx={{ width: '19.75rem' }}>
                Criar Sala
            </Button>
        </Box>
    );
};

export default CreateRoom;
