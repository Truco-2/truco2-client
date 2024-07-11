import { Box, Typography } from '@mui/material';
import { Button } from 'components/ui/Button';
import { TextField } from 'components/ui/TextField';
import React from 'react';
import { IRegisterScreen } from 'types/Register';
import styles from './Register.module.scss';

const RegisterMobile: React.FC<IRegisterScreen> = ({
    handleSubmit,
    register,
    handleRegister,
}) => {
    return (
        <Box className={styles.registerMobileContainer}>
            <Box>
                <form
                    className={styles.formBox}
                    onSubmit={handleSubmit(handleRegister)}
                >
                    <Typography className={styles.loginTitle}>
                        Cadastre-se
                    </Typography>

                    <Box className={styles.textFieldBox}>
                        <Box>
                            <Typography className={styles.label}>
                                Nome
                            </Typography>

                            <TextField
                                placeholder="Nome"
                                {...register('name')}
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <Typography className={styles.label}>
                                Email
                            </Typography>

                            <TextField
                                placeholder="name@email.com"
                                {...register('email')}
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <Typography className={styles.label}>
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
    );
};

export default RegisterMobile;
