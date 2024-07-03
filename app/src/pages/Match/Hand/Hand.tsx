import React from 'react';

import styles from './Hand.module.scss';

import { Box } from '@mui/material';

import Card from '../Card/Card';

import { generateCards } from 'helpers/cardHelpers';
import BackCard from '../BackCard/BackCard';

interface IHandProps {
    me: boolean;
    cards: number[];
}

const cardsOptions = generateCards();

const Hand: React.FC<IHandProps> = ({ me, cards }) => {
    return (
        <Box className={styles.hand}>
            {me ? (
                <ul className="table">
                    {cards.map((card) => {
                        const rank = cardsOptions[card].rank;
                        const suit = cardsOptions[card].suit;

                        return (
                            <li key={card}>
                                <Card rank={rank} suit={suit} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <ul className="hand">
                    {cards.map((card) => (
                        <BackCard key={card} />
                    ))}
                </ul>
            )}
        </Box>
    );
};

export default Hand;
