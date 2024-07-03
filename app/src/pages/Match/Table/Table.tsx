import React, { useRef } from 'react';

import styles from './Table.module.scss';

import { Box } from '@mui/material';

import Hand from '../Hand/Hand';

import { IPlayer } from 'types/Match';

import { userInformations } from 'helpers/session';
import TableCard from '../TableCard/TableCard';

interface ITableProps {
    players: IPlayer[];
    playerCards: number[];
    tableCard: number;
    options: number[];
    handlePlay: (cardId: number) => void;
    handleBet: (bet: number) => void;
}

const generateCardArray = (length: number) => {
    return Array.from(Array(length).keys());
};

const Table: React.FC<ITableProps> = ({
    players,
    playerCards,
    tableCard,
    options,
    handlePlay,
    handleBet,
}) => {
    const userId = userInformations().sub;

    const tableRef = useRef<HTMLDivElement>();

    return (
        <Box className={`playingCards ${styles.table}`} ref={tableRef}>
            {players.map((player, index) => {
                const me = player.id === userId;

                const cards = me
                    ? playerCards
                    : generateCardArray(player.cardsOnHand);

                const cardPlay = player.play?.cardId
                    ? [player.play.cardId]
                    : [];

                return (
                    <React.Fragment key={player.id}>
                        <Hand
                            cards={cards}
                            me={me}
                            index={index}
                            radius={(tableRef.current?.offsetWidth ?? 0) / 2.2}
                            rotation={360 / players.length}
                            handlePlay={handlePlay}
                            handleBet={handleBet}
                            options={options}
                        />

                        {cardPlay.length > 0 && (
                            <Hand
                                cards={cardPlay}
                                me={true}
                                index={index}
                                radius={
                                    (tableRef.current?.offsetWidth ?? 0) / 3.5
                                }
                                rotation={360 / players.length}
                            />
                        )}
                    </React.Fragment>
                );
            })}

            <TableCard card={tableCard} />
        </Box>
    );
};

export default Table;
