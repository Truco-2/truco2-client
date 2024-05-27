import React from 'react';

import styles from './Login.module.scss';

import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    styled,
} from '@mui/material';

import Logo from 'assets/Logo.tsx';

interface IBaseButton {
    primary: boolean;
}

const BaseButton = styled(Button)(({ primary }: IBaseButton) => ({
    paddingBlock: '0.625rem',
    backgroundColor: primary ? '#DC8230' : '#FFFFFF',
    color: primary ? '#FFFFFF' : '#000000',
    fontWeight: 500,
    textTransform: 'none',
}));

const Login: React.FC = () => {
    return (
        <Box className={styles.container}>
            <Container component="main" maxWidth="lg">
                <Box className={styles.containerFlex}>
                    <Box className={styles.logoBox}>
                        <Typography variant="h1">TRUCO 2</Typography>

                        <Logo height={'287px'} width={'242px'} />
                    </Box>
                    <Box className={styles.formBox}>
                        <Typography variant="h1">Entrar</Typography>

                        <Typography>
                            Cadastre-se agora e tenha acesso a conteúdos
                            exclusivos!
                        </Typography>

                        <Box className={styles.textFieldBox}>
                            <Box>
                                <Typography className={styles.emailLabel}>
                                    Email
                                </Typography>

                                <TextField fullWidth />
                            </Box>

                            <TextField fullWidth />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                            }}
                        >
                            <Typography>
                                Esqueceu a senha? Resete a senha
                            </Typography>

                            <BaseButton primary fullWidth>
                                Entrar
                            </BaseButton>
                        </Box>

                        <Typography>
                            Ao entrar concorda com termos de servicos
                        </Typography>

                        {/* Divider */}

                        <BaseButton primary={false} fullWidth>
                            Entrar como convidado
                        </BaseButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
