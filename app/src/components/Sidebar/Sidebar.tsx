import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import { Home } from '@mui/icons-material';
import React, { ReactElement, useState } from 'react';
import styles from './Sidebar.module.scss';
import { LogoContained } from 'assets/Logo';
import PlayIcon from 'assets/PlayIcon.svg';
import NewsIcon from 'assets/NewsIcon.svg';
import ProfileIcon from 'assets/ProfileIcon.svg';
import LogoutIcon from 'assets/LogOutIcon.svg';
import { useNavigate } from 'react-router-dom';
import { cleanCookies } from 'helpers/cookies';
import { userInformations } from 'helpers/session';

type options = 'Home' | 'Jogar' | 'Carreira' | 'Perfil';

interface IOptions {
    text: options;
    icon: ReactElement;
    url: string;
}

const options: IOptions[] = [
    { text: 'Home', icon: <Home />, url: '/' },
    { text: 'Jogar', icon: <PlayIcon />, url: '/play' },
    { text: 'Carreira', icon: <NewsIcon />, url: '/career' },
    { text: 'Perfil', icon: <ProfileIcon />, url: '/profile' },
];

const SidebarOptions: React.FC = () => {
    const [optionSelected, setOptionSelected] = useState<options>('Home');

    const navigate = useNavigate();

    const handleLogout = () => {
        cleanCookies('userToken');

        navigate('/login');
    };

    return (
        <Box className={styles.sidebarListContainer}>
            <List className={styles.list}>
                {options.map((option, index) => {
                    const selected = optionSelected === option.text;
                    return (
                        <ListItem
                            key={index}
                            disablePadding
                            className={styles.listItem}
                        >
                            <ListItemButton
                                className={
                                    selected
                                        ? styles.selectedListItemButton
                                        : styles.listItemButton
                                }
                                onClick={() => {
                                    setOptionSelected(option.text);
                                    navigate(option.url);
                                }}
                            >
                                <ListItemIcon
                                    className={
                                        selected
                                            ? styles.selectedListItemIcon
                                            : styles.listItemIcon
                                    }
                                >
                                    {option.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={option.text}
                                    className={
                                        selected
                                            ? styles.selectedListItemText
                                            : styles.listItemText
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <Divider className={styles.divider} />
            <List className={styles.list}>
                <ListItem disablePadding className={styles.listItem}>
                    <ListItemButton className={styles.listItemButton}>
                        <ListItemIcon className={styles.listItemIcon}>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Sair'}
                            className={styles.listItemText}
                            onClick={() => handleLogout()}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

const Sidebar: React.FC = () => {
    return (
        <Box className={styles.sidebarContainer}>
            <Box className={styles.header}>
                <Box className={styles.titleContainer}>
                    <LogoContained width={'20px'} height={'20px'} />
                    <Typography className={styles.title}>Truco 2</Typography>
                </Box>

                <Typography className={styles.subtitle}>
                    Hi {userInformations().username}
                </Typography>
            </Box>
            {<SidebarOptions />}
        </Box>
    );
};

export default Sidebar;
