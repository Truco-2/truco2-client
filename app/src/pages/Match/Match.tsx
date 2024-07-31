import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';

import useSocket from 'hooks/useSocket';

import { useNavigate, useParams } from 'react-router-dom';

import {
    IBetData,
    IChatSocket,
    IMatchData,
    IMessage,
    IPlayerRequestData,
    ISocketData,
} from 'types/Match';

import { userInformations } from 'helpers/session';
import MatchMobile from './MatchMobile';
import MatchDesktop from './MatchDesktop';

const Match: React.FC = () => {
    const [matchData, setMatchData] = useState<IMatchData>();
    const [matchStatus, setMatchStatus] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [options, setOptions] = useState<number[]>([]);
    const [playerToPlay, setPlayerToPlay] = useState<number>(0);
    const [messages, setMessages] = useState<IMessage[]>([]);

    const playerIdToUserName = useRef<Record<number, string>>({});
    const isMobile = useMediaQuery('(max-width:800px)');

    const { socket } = useSocket('match');

    const { id } = useParams();

    const navigate = useNavigate();

    const userId = userInformations().sub;

    const handleMatchMsg = useCallback(
        (payload: ISocketData) => {
            const code = payload.code;

            switch (code) {
                case 'ROUND_START':
                case 'TURN_START':
                case 'PLAY':
                case 'PLAYER_STATUS': {
                    const data = payload.data as IMatchData;

                    if (code === 'PLAYER_STATUS') {
                        playerIdToUserName.current = data.match.players.reduce(
                            (acc, item) => ({
                                ...acc,
                                [item.id]: item.user.name,
                            }),
                            {}
                        );
                    }

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
                case 'MATCH_END': {
                    const data = payload.data as IMatchData;

                    const roomCode = data.match.roomCode;

                    setTimeout(() => {
                        navigate(`/room/${roomCode}`);
                    }, 5000);

                    break;
                }
            }
        },
        [userId, navigate]
    );

    const handleMatchChat = useCallback(
        (payload: IChatSocket) => {
            const newMessage: IMessage = {
                message: payload.data.message,
                name: playerIdToUserName.current[payload.data.playerId] ?? '',
            };

            setMessages((prev) => [...prev, newMessage]);
        },
        [playerIdToUserName.current]
    );

    useEffect(() => {
        if (socket?.connected) {
            socket.emit('enter', {});

            socket.on('match-msg', handleMatchMsg);
            socket.on('match-chat', handleMatchChat);

            return () => {
                socket.off('match-msg', handleMatchMsg);
                socket.off('match-chat', handleMatchChat);
            };
        }
    }, [socket, handleMatchMsg, handleMatchChat]);

    const handlePlay = (card: number) => {
        socket?.emit('play', { card });
    };

    const handleBet = (bet: number) => {
        socket?.emit('bet', { bet });
    };

    const sendMessageBySocket = (message: string) => {
        socket?.emit('chat', { message });
    };

    return (
        <React.Fragment>
            {isMobile ? (
                <MatchMobile
                    sendMessageBySocket={sendMessageBySocket}
                    matchStatus={matchStatus}
                    count={count}
                    matchData={matchData}
                    options={options}
                    playerToPlay={playerToPlay}
                    handlePlay={handlePlay}
                    handleBet={handleBet}
                    messages={messages}
                />
            ) : (
                <MatchDesktop
                    messages={messages}
                    sendMessageBySocket={sendMessageBySocket}
                    matchStatus={matchStatus}
                    count={count}
                    matchData={matchData}
                    options={options}
                    playerToPlay={playerToPlay}
                    handlePlay={handlePlay}
                    handleBet={handleBet}
                />
            )}
        </React.Fragment>
    );
};

export default Match;
