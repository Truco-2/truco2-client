import React from 'react';
import styles from './BackCard.module.scss';

interface IBackCard {
    isMobile?: boolean;
    cardCount?: number;
}

const BackCard: React.FC<IBackCard> = ({ isMobile, cardCount }) => {
    return (
        <div className={styles.backCardContainer}>
            <div
                style={{
                    transform: isMobile ? 'scale(0.5)' : '',
                }}
                className="card back"
            >
                *
            </div>
            <h1 className={styles.cardCount}>{cardCount}</h1>
        </div>
    );
};

export default BackCard;
