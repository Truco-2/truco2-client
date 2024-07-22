import React, { ReactElement, useState } from 'react';
import {
    Accordion,
    AccordionDetails,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    styled,
} from '@mui/material';
import { LogoContained } from 'assets/Logo';
import { Height, Home } from '@mui/icons-material';
import ArrowIcon from 'assets/ArrowIcon.svg';
import PlayIcon from 'assets/PlayIcon.svg';
import NewsIcon from 'assets/NewsIcon.svg';
import ProfileIcon from 'assets/ProfileIcon.svg';
import LogoutIcon from 'assets/LogOutIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { cleanCookies } from 'helpers/cookies';
import styles from './HeaderMobile.module.scss';

const StyledBoxContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
});

const StyledAccordion = styled(Accordion)(
    ({ expanded }: { expanded: boolean }) => ({
        background: '#000000',
        border: 'solid #FE6B01 1px !important',
        position: 'absolute',
        zIndex: '20',
        transform: 'translate(0, -4rem)',
        width: 'calc(100% - 2px)',
        ':after': expanded
            ? {
                  content: '""',
                  width: '100%',
                  marginTop: '2px',
                  height: '100%',
                  backdropFilter: 'blur(2px)',
                  position: 'absolute',
                  zIndex: '1',
              }
            : '',
    })
);

const StyledBox = styled(Box)({
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: '1rem',
});

const StyledIconButton = styled(IconButton)(
    ({ expanded }: { expanded: boolean }) => ({
        background: '#000000 !important',
        border: '1px solid #FE6B01',
        zIndex: '2',
        transform: expanded ? 'rotate(180deg)' : '',
        position: expanded ? 'absolute' : 'inherit',
        bottom: expanded ? '-1rem' : '',
        right: expanded ? '1rem' : '',
    })
);

const StyledTypography = styled(Typography)({
    fontSize: '2rem',
    color: '#FE6B01 !important',
    fontWeight: 'bold',
});

const HeaderMobile: React.FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [optionSelected, setOptionSelected] = useState<options>('Home');
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        cleanCookies('userToken');

        navigate('/login');
    };

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
    return (
        <StyledAccordion expanded={expanded}>
            <StyledBox>
                <StyledBoxContainer>
                    <LogoContained height="2rem" width="2rem" />
                    <StyledTypography>Truco 2</StyledTypography>
                </StyledBoxContainer>
                {location.pathname !== '/login' ? (
                    <StyledIconButton
                        expanded={expanded}
                        onClick={() => setExpanded((e) => !e)}
                    >
                        <ArrowIcon />
                    </StyledIconButton>
                ) : null}
            </StyledBox>
            <AccordionDetails>
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
                                        setExpanded(false);
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
            </AccordionDetails>
        </StyledAccordion>
    );
};

export default HeaderMobile;
