import React from 'react';

import styles from './Hand.module.scss';

import { Box } from '@mui/material';

import Card from '../Card/Card';

import BackCard from '../BackCard/BackCard';

interface IHandProps {
    me: boolean;
    cards: number[];
    index: number;
    rotation: number;
    radius: number;
    handlePlay?: (cardId: number) => void;
}

const generateTransform = (
    index: number,
    rotation: number,
    radius: number,
    me: boolean
) => {
    const value = `rotate(${
        index * rotation
    }deg) translate(${radius}px) rotate(${me ? '-90deg' : '90deg'})`;

    return value;
};

const Hand: React.FC<IHandProps> = ({
    me,
    cards,
    index,
    radius,
    rotation,
    handlePlay,
}) => {
    return (
        <Box
            className={styles.hand}
            sx={{ transform: generateTransform(index, rotation, radius, me) }}
        >
            {me ? (
                <ul className="table">
                    {cards.map((card) => (
                        <li
                            onClick={() => handlePlay && handlePlay(card)}
                            key={card}
                        >
                            <Card card={card} />
                        </li>
                    ))}
                </ul>
            ) : (
                <ul
                    style={{ width: `${100 + cards.length * 4}px` }}
                    className="hand"
                >
                    {cards.map((card) => (
                        <li key={card}>
                            <BackCard />
                        </li>
                    ))}
                </ul>
            )}
        </Box>
    );
};

export default Hand;
