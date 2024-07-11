import React from 'react';
import Card from '../Card/Card';
import styles from './TableCard.module.scss';

import { Box } from '@mui/material';

interface ITableCardProps {
    card: number;
    isMobile?: boolean;
}

const TableCard: React.FC<ITableCardProps> = ({ card, isMobile }) => {
    console.log(isMobile);
    return (
        <Box className={styles.tableCard}>
            <Card card={card} isMobile={isMobile} />
        </Box>
    );
};

export default TableCard;
