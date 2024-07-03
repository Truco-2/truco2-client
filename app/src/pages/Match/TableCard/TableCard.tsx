import React from 'react';
import Card from '../Card/Card';
import styles from './TableCard.module.scss';

import { Box } from '@mui/material';

interface ITableCardProps {
    card: number;
}

const TableCard: React.FC<ITableCardProps> = ({ card }) => {
    return (
        <Box className={styles.tableCard}>
            <Card card={card} />
        </Box>
    );
};

export default TableCard;
