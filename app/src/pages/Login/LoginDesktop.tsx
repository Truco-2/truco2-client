import { ILoginScreen } from 'types/Login';
import { Box, Container, Typography } from '@mui/material';
import styles from './Login.module.scss';
import Logo from 'assets/Logo.tsx';
import { Button } from 'components/ui/Button';
import { TextField } from 'components/ui/TextField';
import { Link } from 'react-router-dom';

const LoginDesktop: React.FC<ILoginScreen> = ({
    handleSubmit,
    handleLogin,
    register,
    handleGuest,
}) => {
    return (
        <Box className={styles.loginDesktopContainer}>
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

                            <Box className={styles.body}>
                                <Typography className={styles.linkContainer}>
                                    Esqueceu a senha?{' '}
                                    <Link to="/login" className={styles.link}>
                                        Resete a senha.
                                    </Link>
                                </Typography>

                                <Typography className={styles.linkContainer}>
                                    Ainda não tem conta?{' '}
                                    <Link
                                        to="/register"
                                        className={styles.link}
                                    >
                                        Cadastre-se.
                                    </Link>
                                </Typography>
                            </Box>
                            <Button type="submit" primary="true" fullWidth>
                                Entrar
                            </Button>

                            <Typography>
                                Ao entrar concordo com termos de serviços
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

export default LoginDesktop;
