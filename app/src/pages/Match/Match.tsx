import React, { useCallback, useEffect, useState } from 'react';

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
    const [matchStatus, setMatchStatus] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [options, setOptions] = useState<number[]>([]);
    const [playerToPlay, setPlayerToPlay] = useState<number>(0);

    const { socket } = useSocket('match');

    const { id } = useParams();

    const userId = userInformations().sub;

    const handleMatchMsg = useCallback(
        (payload: ISocketData) => {
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

                    setTimeout(
                        () => {
                            setMatchData(data);
                        },
                        code === 'TURN_START' ? 1000 : 0
                    );
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

                    if (code === 'MATCH_START_TIMER') {
                        setMatchStatus('Iniciando Partida');
                    } else if (code === 'BET_REQUEST') {
                        setPlayerToPlay(data.playerId);
                        setMatchStatus('Aguardando Apostas de Blefe');
                    } else {
                        setPlayerToPlay(data.playerId);
                        setMatchStatus('Aguardando Jogada');
                    }

                    setCount(data.counter);
                    break;
                }
                case 'BET': {
                    const data = payload.data as IBetData;

                    const playerId = data.playerId;
                    const bet = data.bet;

                    setMatchData((prev) =>
                        prev
                            ? {
                                  ...prev,
                                  match: {
                                      ...prev.match,
                                      players: prev.match.players.map(
                                          (player) => ({
                                              ...player,
                                              bet:
                                                  player.id === playerId
                                                      ? bet
                                                      : player.bet,
                                          })
                                      ),
                                  },
                              }
                            : prev
                    );

                    break;
                }
            }
        },
        [userId]
    );

    useEffect(() => {
        if (socket?.connected) {
            socket.emit('enter', {});

            socket.on('match-msg', handleMatchMsg);

            return () => {
                socket.off('match-msg', handleMatchMsg);
            };
        }
    }, [socket, id, handleMatchMsg]);

    const handlePlay = (card: number) => {
        socket?.emit('play', { card });
    };

    const handleBet = (bet: number) => {
        socket?.emit('bet', { bet });
    };

    return (
        <Box className={styles.container}>
            <Typography className={styles.text}>Sala Do Jogo</Typography>

            <Box>
                <Typography className={styles.subText}>
                    {matchStatus}
                </Typography>
                <Typography className={styles.subText}>
                    Timer: {count}
                </Typography>
            </Box>

            <Box className={styles.tableContainer}>
                <Table
                    playerCards={matchData?.cards ?? []}
                    players={matchData?.match.players ?? []}
                    tableCard={matchData?.match.tableCard ?? 0}
                    options={options}
                    playerToPlay={playerToPlay}
                    handlePlay={handlePlay}
                    handleBet={handleBet}
                />
            </Box>
        </Box>
    );
};

export default Match;
