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
    playerToPlay: number;
    handlePlay: (cardId: number) => void;
    handleBet: (bet: number) => void;
    isMobile?: boolean;
}

const generateCardArray = (length: number) => {
    return Array.from(Array(length).keys());
};

const Table: React.FC<ITableProps> = ({
    players,
    playerCards,
    tableCard,
    options,
    playerToPlay,
    handlePlay,
    handleBet,
    isMobile,
}) => {
    const userId = userInformations().sub;
    const tableRef = useRef<HTMLDivElement>();

    return (
        <Box
            className={`playingCards ${
                isMobile ? styles.tableMobile : styles.tableDesktop
            }`}
            ref={tableRef}
        >
            {players.map((player, index) => {
                const me = player.id === userId;

                const cards = me
                    ? playerCards
                    : generateCardArray(player.cardsOnHand);

                const cardPlay = player.play ? [player.play.cardId] : [];

                const rotate = me ? '-90deg' : '90deg';

                const isMyTurn = playerToPlay === player.id;

                return (
                    <React.Fragment key={player.id}>
                        <Hand
                            cards={cards}
                            me={me}
                            index={index}
                            radius={(tableRef.current?.offsetWidth ?? 0) / 2}
                            rotation={360 / players.length}
                            handlePlay={handlePlay}
                            handleBet={handleBet}
                            options={options}
                            rotate={rotate}
                            player={player}
                            isMyTurn={isMyTurn}
                            isMobile={isMobile}
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
                                rotate={rotate}
                                player={player}
                                isMobile={isMobile}
                            />
                        )}
                    </React.Fragment>
                );
            })}

            <TableCard isMobile={isMobile} card={tableCard} />
        </Box>
    );
};

export default Table;
