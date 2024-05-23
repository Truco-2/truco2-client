import { Box, Button, TextField, Typography, styled } from '@mui/material';
import styles from './CreateRoom.module.scss';

const StyledTextField = styled(TextField)(() => ({
    input: {
        color: '#ffffffb2',
    },
}));

const CreateRoom: React.FC = () => {
    return (
        <Box className={styles.createRoomContainer}>
            <Typography className={styles.title}>Criar Sala</Typography>
            <Typography className={styles.description}>
                Crie a sala que você irá jogar
            </Typography>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>Nome</Typography>
                <StyledTextField
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                    }}
                    className={styles.input}
                />
            </Box>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>
                    Modo de sala
                </Typography>
                <StyledTextField
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                    }}
                    className={styles.input}
                />
            </Box>
            <Box className={styles.inputContainer}>
                <Typography className={styles.inputLabel}>
                    Limite de jogadores
                </Typography>
                <StyledTextField
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                    }}
                    className={styles.input}
                />
            </Box>
            <Button className={styles.createButton}>Criar Sala</Button>
        </Box>
    );
};

export default CreateRoom;
