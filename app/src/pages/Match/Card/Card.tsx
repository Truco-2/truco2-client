import { generateCards } from 'helpers/cardHelpers';
import React from 'react';
import { CardSuit } from 'types/Card';
import styles from './Card.module.scss';

interface ICardProps {
    card: number;
    isMobile?: boolean;
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

const cardsOptions = generateCards();

const Card: React.FC<ICardProps> = ({ card, isMobile }) => {
    const rank = cardsOptions[card].rank;
    const suit = cardsOptions[card].suit;
    console.log(isMobile);
    return (
        <div
            className={`card rank-${rank.toLowerCase()} ${suit} ${
                isMobile ? styles.cardMobile : ''
            }`}
        >
            {isMobile}
            <span className="rank">{rank}</span>
            {renderCardSuit(suit)}
        </div>
    );
};

export default Card;
