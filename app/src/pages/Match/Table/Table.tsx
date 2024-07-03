import React from 'react';

import styles from './Table.module.scss';

import { Box } from '@mui/material';

import Hand from '../Hand/Hand';

import { IPlayer } from 'types/Match';

import { userInformations } from 'helpers/session';

interface ITableProps {
    players: IPlayer[];
    playerCards: number[];
}

const generateCardArray = (length: number) => {
    return Array.from(Array(length).keys());
};

const Table: React.FC<ITableProps> = ({ players, playerCards }) => {
    const userId = userInformations().sub;

    return (
        <Box className={`playingCards ${styles.table}`}>
            {players.map((player) => {
                const me = player.id === userId;
                const cards = me
                    ? generateCardArray(player.cardsOnHand)
                    : playerCards;

                return <Hand cards={cards} me={me} key={player.id} />;
            })}
        </Box>
    );
};

export default Table;
