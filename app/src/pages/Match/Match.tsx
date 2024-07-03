import React, { useEffect, useState } from 'react';

import styles from './Match.module.scss';

import { Box, Typography } from '@mui/material';

import useSocket from 'hooks/useSocket';

import { useParams } from 'react-router-dom';

import {
    IBetData,
    IMatchData,
    IPlayerRequestData,
    ISocketData,
} from 'types/Match';

import Table from './Table/Table';

import { userInformations } from 'helpers/session';

const Match: React.FC = () => {
    const [matchData, setMatchData] = useState<IMatchData>();
    const [count, setCount] = useState<number>(0);
    const [options, setOptions] = useState<number[]>([]);

    const { socket } = useSocket('match');

    const { id } = useParams();

    const userId = userInformations().sub;

    const handleMatchMsg = (payload: ISocketData) => {
        console.log('payload: ', payload);

        const code = payload.code;

        switch (code) {
            case 'ROUND_START':
            case 'TURN_START':
            case 'PLAY':
            case 'PLAYER_STATUS': {
                const data = payload.data as IMatchData;

                const index = data.match.players.findIndex(
                    (p) => p.id === userId
                );

                if (index > 0) {
                    const array = data.match.players.slice(0, index);

                    const newArray = data.match.players.slice(index);

                    data.match.players = [...newArray, ...array];
                }

                setMatchData(data);
                break;
            }
            case 'BET_REQUEST':
            case 'MATCH_START_TIMER':
            case 'PLAY_REQUEST': {
                const data = payload.data as IPlayerRequestData;

                if (code === 'BET_REQUEST' && data.playerId === userId) {
                    setOptions(data.options);
                } else {
                    setOptions([]);
                }

                setCount(data.counter);
                break;
            }
            case 'BET':
                const data = payload.data as IBetData;

                const playerId = data.playerId;
                const bet = data.bet;

                const player = matchData?.match.players.find(
                    (player) => player.id === playerId
                );

                if (player) {
                    player.bet = bet;
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
    }, [socket, id]);

    const handlePlay = (card: number) => {
        socket?.emit('play', { card });
    };

    const handleBet = (bet: number) => {
        socket?.emit('bet', { bet });
    };

    return (
        <Box className={styles.container}>
            <Typography>Sala Do Jogo</Typography>

            <Typography>Timer: {count}</Typography>

            <Box className={styles.tableContainer}>
                <Table
                    playerCards={matchData?.cards ?? []}
                    players={matchData?.match.players ?? []}
                    tableCard={matchData?.match.tableCard ?? 0}
                    options={options}
                    handlePlay={handlePlay}
                    handleBet={handleBet}
                />
            </Box>

            {/* <Box className={styles.table}>
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
            </Box> */}
        </Box>
    );
};

export default Match;
