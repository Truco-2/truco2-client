import { Box, Typography } from '@mui/material';
import React from 'react';
import { ILoginScreen } from 'types/Login';
import styles from './Login.module.scss';
import HeaderMobile from 'components/ui/HeaderMobile';
import { Button } from 'components/ui/Button';
import { TextField } from 'components/ui/TextField';

const LoginMobile: React.FC<ILoginScreen> = ({
    handleGuest,
    handleLogin,
    handleSubmit,
    register,
}) => {
    return (
        <Box className={styles.loginMobileContainer}>
            <HeaderMobile />
            <Box>
                <form
                    className={styles.formBox}
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <Typography className={styles.loginTitle}>
                        Entrar
                    </Typography>

                    <Typography>
                        Cadastre-se agora e tenha acesso a conteúdos exclusivos!
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
                            Esqueceu a senha?{' '}
                            <a
                                className={styles.resetPasswordAnchor}
                                onClick={(e) => e.preventDefault()}
                                target="_blank"
                            >
                                Resete a senha
                            </a>
                        </Typography>

                        <Button type="submit" primary="true" fullWidth>
                            Entrar
                        </Button>
                    </Box>

                    <Typography>
                        Ao entrar concordo com termos de serviços
                    </Typography>

                    {/* Divider */}

                    <Button onClick={handleGuest} primary="false" fullWidth>
                        Entrar como convidado
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default LoginMobile;
