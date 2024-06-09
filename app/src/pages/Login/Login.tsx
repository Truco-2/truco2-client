import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './Login.module.scss';

import { Box, Container, Typography } from '@mui/material';

import Logo from 'assets/Logo.tsx';

import { IGuestResponse, ILoginData } from 'types/Login.ts';

import axios from 'axios';

import { jwtDecode } from 'jwt-decode';

import { setCookies } from 'helpers/cookies.ts';
import { API_ROOT_PATH, GUEST_LOGIN_PATH } from 'helpers/apiHelper';

import { TextField } from 'components/ui/TextField';
import { Button } from 'components/ui/Button';

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm<ILoginData>({
        resolver: zodResolver(loginSchema),
    });

    const navigate = useNavigate();

    const handleLogin = (data: ILoginData) => {
        console.log('data: ', data);

        console.log('submit');
    };

    const handleGuest = async () => {
        const response = await axios.get(
            `${API_ROOT_PATH}/${GUEST_LOGIN_PATH}`
        );

        if (response.status === 200) {
            const jwtData: IGuestResponse = response.data;

            console.log('jwt: ', jwtData);

            const decoded = jwtDecode(jwtData.access_token);

            console.log('decoded: ', decoded);

            setCookies('userToken', jwtData.access_token, decoded.exp ?? 0);

            navigate('/');
        }
    };

    return (
        <Box className={styles.container}>
            <Container component="main" maxWidth="lg">
                <Box className={styles.containerFlex}>
                    <Box className={styles.logoBox}>
                        <Typography variant="h1">TRUCO 2</Typography>

                        <Logo height={'287px'} width={'242px'} />
                    </Box>
                    <Box>
                        <form
                            className={styles.formBox}
                            onSubmit={handleSubmit(handleLogin)}
                        >
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

                                    <TextField
                                        placeholder="name@email.com"
                                        {...register('email')}
                                        fullWidth
                                    />
                                </Box>
                                <Box>
                                    <Typography className={styles.emailLabel}>
                                        Senha
                                    </Typography>

                                    <TextField
                                        placeholder="********"
                                        type="password"
                                        {...register('password')}
                                        fullWidth
                                    />
                                </Box>
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

                                <Button type="submit" primary="true" fullWidth>
                                    Entrar
                                </Button>
                            </Box>

                            <Typography>
                                Ao entrar concorda com termos de servicos
                            </Typography>

                            {/* Divider */}

                            <Button
                                onClick={handleGuest}
                                primary="false"
                                fullWidth
                            >
                                Entrar como convidado
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;
