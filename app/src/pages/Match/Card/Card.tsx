import React from 'react';

import { CardSuit } from 'types/Card';

interface ICardProps {
    rank: string;
    suit: CardSuit;
}

const renderCardSuit = (suit: CardSuit) => {
    switch (suit) {
        case CardSuit.DIAMS:
            return <span className="suit">&diams;</span>;
        case CardSuit.SPADES:
            return <span className="suit">&spades;</span>;
        case CardSuit.CLUBS:
            return <span className="suit">&clubs;</span>;
        case CardSuit.HEARTS:
            return <span className="suit">&hearts;</span>;
    }
};

const Card: React.FC<ICardProps> = ({ rank, suit }) => {
    return (
        <div className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            {renderCardSuit(suit)}
        </div>
    );
};

export default Card;
