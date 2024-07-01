import React from 'react';

interface ICardProps {
    rank: string;
    suit: string;
}

const Card: React.FC<ICardProps> = ({ rank, suit }) => {
    return (
        <div className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit"></span>
        </div>
    );
};

export default Card;
