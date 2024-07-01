import React, { useEffect, useState } from 'react';

import styles from './Match.module.scss';

import { Box, Typography } from '@mui/material';

import useSocket from 'hooks/useSocket';

import { userInformations } from 'helpers/session';

import { useParams } from 'react-router-dom';

interface IData {
    code: string;
    data: IMatchData;
}

interface IUser {
    id: number;
    name: string;
}

interface IPlayer {
    id: number;
    status: string; //ENUM
    bet: number;
    cardsOnHand: number;
    play: null;
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

const Match: React.FC = () => {
    const [matchData, setMatchData] = useState<IMatchData>();

    const { socket } = useSocket('match');

    const { id } = useParams();

    const userId = userInformations().sub;

    const handleMatchMsg = (payload: IData) => {
        console.log('payload: ', payload);

        const code = payload.code;

        switch (code) {
            case 'TURN_START':
            case 'PLAYER_STATUS': {
                setMatchData(payload.data);
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

    return (
        <Box>
            <Typography>Sala Do Jogo</Typography>

            <Box className={styles.table}>
                {matchData?.cards.map((card, index) => (
                    <h1 key={index}>{card}</h1>
                ))}
            </Box>
        </Box>
    );
};

export default Match;
