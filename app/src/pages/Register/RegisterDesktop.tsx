import { Box, Container, Typography } from '@mui/material';
import Logo from 'assets/Logo';
import { Button } from 'components/ui/Button';
import { TextField } from 'components/ui/TextField';
import React from 'react';
import { IRegisterScreen } from 'types/Register';
import styles from './Register.module.scss';

const RegisterDesktop: React.FC<IRegisterScreen> = ({
    handleSubmit,
    register,
    handleRegister,
}) => {
    return (
        <Box className={styles.registerDesktopContainer}>
            <Container component="main" maxWidth="lg">
                <Box className={styles.containerFlex}>
                    <Box className={styles.logoBox}>
                        <Typography variant="h1">TRUCO 2</Typography>

                        <Logo height={'287px'} width={'242px'} />
                    </Box>
                    <Box>
                        <form
                            className={styles.formBox}
                            onSubmit={handleSubmit(handleRegister)}
                        >
                            <Typography variant="h1">Cadastre-se</Typography>

                            <Box className={styles.textFieldBox}>
                                <Box>
                                    <Typography className={styles.nameLabel}>
                                        Nome
                                    </Typography>

                                    <TextField
                                        placeholder="Nome"
                                        {...register('name')}
                                        fullWidth
                                    />
                                </Box>
                                <Box>
                                    <Typography className={styles.emailLabel}>
                                        Email
                                    </Typography>

                                    <TextField
                                        placeholder="nome@email.com"
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

                            <Button type="submit" primary="true" fullWidth>
                                Cadastrar
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default RegisterDesktop;
