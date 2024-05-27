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
import React, { ReactElement, useState } from 'react';
import styles from './Sidebar.module.scss';
import { LogoContained } from 'assets/Logo';
import PlayIcon from 'assets/PlayIcon.svg';
import GamesIcon from 'assets/GamesIcon.svg';
import NewsIcon from 'assets/NewsIcon.svg';
import ProfileIcon from 'assets/ProfileIcon.svg';
import LogoutIcon from 'assets/LogOutIcon.svg';

type options = 'Jogar' | 'Jogos' | 'Carreira' | 'Perfil';

interface IOptions {
    text: options;
    icon: ReactElement;
}

const options: IOptions[] = [
    { text: 'Jogar', icon: <PlayIcon /> },
    { text: 'Jogos', icon: <GamesIcon /> },
    { text: 'Carreira', icon: <NewsIcon /> },
    { text: 'Perfil', icon: <ProfileIcon /> },
];

const SidebarOptions: React.FC = () => {
    const [optionSelected, setOptionSelected] = useState<options>('Jogar');

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
                                onClick={() => setOptionSelected(option.text)}
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
            <Box className={styles.titleContainer}>
                <LogoContained width={'20px'} height={'20px'} />
                <Typography className={styles.title}>Truco 2</Typography>
            </Box>
            {<SidebarOptions />}
        </Box>
    );
};

export default Sidebar;
