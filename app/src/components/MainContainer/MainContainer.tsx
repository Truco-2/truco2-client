import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import styles from './MainContainer.module.scss';

interface IMainContainerProps {
    children: ReactNode;
}

const MainContainer: React.FC<IMainContainerProps> = ({ children }) => {
    return (
        <Box className={styles.mainContainer} id="mainContainer">
            {children}
        </Box>
    );
};

export default MainContainer;
