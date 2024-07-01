import React, { useEffect, useState } from 'react';

import styles from './Match.module.scss';

import 'game/cards.css';

import { Box, Typography } from '@mui/material';

import useSocket from 'hooks/useSocket';

import { userInformations } from 'helpers/session';

import { useParams } from 'react-router-dom';
import Card from './Card/Card';

interface IPlayerRequestData {
    counter: number;
    playerId: number;
}

interface IData {
    code: string;
    data: IMatchData | IPlayerRequestData;
}

interface IUser {
    id: number;
    name: string;
}

interface IPlay {
    cardId: number;
    id: number;
}

interface IPlayer {
    id: number;
    status: string; //ENUM
    bet: number;
    cardsOnHand: number;
    play: IPlay;
    type: string; //ENUM
    user: IUser;
    wins: number;
}

interface IMatch {
    id: number;
    status: string;
    roomCode: string;
    round: number;
    turn: number;
    turnsLeft: number;
    littleCorner: string;
    sky: string;
    tableCard: number;
    playOrder: number[];
    players: IPlayer[];
}

interface IMatchData {
    playerId: number;
    status: string; // ENUM;
    cards: number[];
    match: IMatch;
}

const suitHelper: Record<number, string> = {
    0: 'diams',
    1: 'hearts',
    2: 'spades',
    3: 'clubs',
};

interface ICardOptions {
    rank: string;
    suit: string;
}

const generateCards = () => {
    const cardsArray = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];

    let cardId = 0;

    const teste: Record<string, ICardOptions> = cardsArray.reduce(
        (acc, item) => {
            const newObject: Record<string, ICardOptions> = {};

            [0, 1, 2, 3].forEach((c) => {
                newObject[cardId] = {
                    rank: item,
                    suit: suitHelper[c],
                };

                cardId++;
            });

            return { ...acc, ...newObject };
        },
        {}
    );

    return teste;
};

const cardsOptions = generateCards();

console.log(cardsOptions);

// const generateCardSuit = (suit: string) => {
//     if (suit === 'diams') {
//         return '&diams;';
//     } else if (suit === 'hearts') {
//         return '&hearts;';
//     } else if (suit === 'spades') {
//         return '&spades;';
//     } else {
//         return '&clubs;';
//     }
// };

const Match: React.FC = () => {
    const [matchData, setMatchData] = useState<IMatchData>();
    const [count, setCount] = useState<number>(0);

    const { socket } = useSocket('match');

    const { id } = useParams();

    const userId = userInformations().sub;

    const handleMatchMsg = (payload: IData) => {
        console.log('payload: ', payload);

        const code = payload.code;

        switch (code) {
            case 'ROUND_START':
            case 'TURN_START':
            case 'PLAY':
            case 'PLAYER_STATUS': {
                const data = payload.data as IMatchData;

                setMatchData(data);
                break;
            }
            case 'BET_REQUEST':
            case 'MATCH_START_TIMER':
            case 'PLAY_REQUEST': {
                const data = payload.data as IPlayerRequestData;

                setCount(data.counter);
                break;
            }
        }
    };

    useEffect(() => {
        if (socket?.connected) {
            socket.emit('enter', {});

            socket.on('match-msg', handleMatchMsg);

            return () => {
                socket.off('match-msg', handleMatchMsg);
            };
        }
    }, [socket, id, userId]);

    const handlePlay = (card: number) => {
        socket?.emit('play', { card });
    };

    return (
        <Box className="playingCards">
            <Typography>Sala Do Jogo</Typography>

            <Typography>{count}</Typography>

            <Box className={styles.table}>
                {matchData?.match.players.map((player) => {
                    const mainPlayer = player.id === userId;

                    return (
                        <React.Fragment key={player.id}>
                            <Box
                                className={`${styles.hand} ${
                                    mainPlayer
                                        ? styles.primaryPlayer
                                        : styles.secondaryPlayer
                                } `}
                            >
                                <ul className="table">
                                    {mainPlayer ? (
                                        <>
                                            {matchData?.cards.map((card) => (
                                                <li
                                                    onClick={() =>
                                                        handlePlay(card)
                                                    }
                                                    key={card}
                                                >
                                                    <Card
                                                        rank={
                                                            cardsOptions[card]
                                                                .rank
                                                        }
                                                        suit={
                                                            cardsOptions[card]
                                                                .suit
                                                        }
                                                    />
                                                </li>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {Array.from(
                                                Array(player.cardsOnHand).keys()
                                            ).map((card) => (
                                                <li key={card}>
                                                    <div
                                                        className={'card back'}
                                                    >
                                                        *
                                                    </div>
                                                </li>
                                            ))}
                                        </>
                                    )}
                                </ul>

                                <Typography>{player.bet}</Typography>
                            </Box>

                            {player.play && (
                                <Box
                                    className={
                                        mainPlayer
                                            ? styles.primaryCards
                                            : styles.secondaryCards
                                    }
                                >
                                    <Card
                                        rank={
                                            cardsOptions[player.play.cardId]
                                                .rank
                                        }
                                        suit={
                                            cardsOptions[player.play.cardId]
                                                .suit
                                        }
                                    />
                                </Box>
                            )}
                        </React.Fragment>
                    );
                })}

                {matchData?.match.tableCard !== undefined && (
                    <Box className={styles.tableCard}>
                        <Card
                            rank={cardsOptions[matchData?.match.tableCard].rank}
                            suit={cardsOptions[matchData?.match.tableCard].suit}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Match;
