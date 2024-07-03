import React from 'react';

import styles from './Hand.module.scss';

import { Box } from '@mui/material';

import Card from '../Card/Card';

import BackCard from '../BackCard/BackCard';
import { Button } from 'components/ui/Button';

interface IHandProps {
    me: boolean;
    cards: number[];
    index: number;
    rotation: number;
    radius: number;
    options?: number[];
    handlePlay?: (cardId: number) => void;
    handleBet?: (bet: number) => void;
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
    options = [],
    rotation,
    handlePlay,
    handleBet,
}) => {
    return (
        <Box
            className={styles.hand}
            sx={{ transform: generateTransform(index, rotation, radius, me) }}
        >
            {me ? (
                <Box className={styles.flexColumn}>
                    {options?.length > 0 ? (
                        <Box className={styles.flex}>
                            {options.map((option) => (
                                <Button
                                    onClick={() =>
                                        handleBet && handleBet(option)
                                    }
                                    key={option}
                                >
                                    {option}
                                </Button>
                            ))}
                        </Box>
                    ) : null}
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
                </Box>
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
