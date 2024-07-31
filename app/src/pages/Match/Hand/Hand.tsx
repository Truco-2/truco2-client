import React from 'react';

import styles from './Hand.module.scss';

import { Badge, Box } from '@mui/material';

import Card from '../Card/Card';

import BackCard from '../BackCard/BackCard';
import { Button } from 'components/ui/Button';
import { IPlayer } from 'types/Match';
import PlayerInformations from '../PlayerInformations/PlayerInformations';

interface IHandProps {
    me: boolean;
    cards: number[];
    index: number;
    rotation: number;
    radius: number;
    options?: number[];
    rotate: string;
    player?: IPlayer;
    isMyTurn?: boolean;
    handlePlay?: (cardId: number) => void;
    handleBet?: (bet: number) => void;
    isMobile?: boolean;
}

const generateTransform = (
    index: number,
    rotation: number,
    radius: number,
    rotate: string
) => {
    const value = `rotate(${
        index * rotation
    }deg) translate(${radius}px) rotate(${rotate})`;

    return value;
};

const Hand: React.FC<IHandProps> = ({
    me,
    cards,
    index,
    radius,
    options = [],
    rotation,
    rotate,
    player,
    isMyTurn = false,
    handlePlay,
    handleBet,
    isMobile,
}) => {
    return (
        <Box
            className={styles.hand}
            sx={{
                transform: generateTransform(index, rotation, radius, rotate),
            }}
        >
            <Box className={isMobile ? styles.badgeMobile : styles.badge}>
                {me && options?.length > 0 ? (
                    <Box
                        className={styles.buttonContainer}
                        sx={{
                            transform: isMobile
                                ? 'scale(0.7);gap:0.5rem'
                                : 'gap:0.5rem;gap:0.5rem',
                        }}
                    >
                        {options.map((option) => (
                            <Button
                                onClick={() => handleBet && handleBet(option)}
                                key={option}
                            >
                                {option}
                            </Button>
                        ))}
                    </Box>
                ) : null}

                <Box className={styles.flex}>
                    {me ? (
                        <ul
                            className={`table ${
                                isMobile && styles.tableMobile
                            }`}
                        >
                            {cards.map((card) => (
                                <li
                                    onClick={() =>
                                        handlePlay && handlePlay(card)
                                    }
                                    className={
                                        isMobile ? styles.cardMobile : ''
                                    }
                                    key={card}
                                >
                                    <Card isMobile={isMobile} card={card} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <>
                            {isMobile ? (
                                <BackCard isMobile cardCount={cards.length} />
                            ) : (
                                <ul
                                    style={{
                                        width: `${100 + cards.length * 10}px`,
                                    }}
                                    className="hand"
                                >
                                    {cards.map((card) => (
                                        <li key={card}>
                                            <BackCard />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )}

                    {handleBet && (
                        <Box
                            className={
                                me
                                    ? styles.selfPlayerInformations
                                    : styles.playerInformations
                            }
                        >
                            <Badge
                                color={'warning'}
                                variant={'dot'}
                                invisible={isMyTurn === false}
                            >
                                <PlayerInformations
                                    player={player as IPlayer}
                                    isMobile={isMobile}
                                />
                            </Badge>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Hand;
