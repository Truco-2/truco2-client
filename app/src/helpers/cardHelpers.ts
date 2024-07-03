import { CardSuit, ICardOptions } from 'types/Card';

const suitHelper: Record<number, CardSuit> = {
    0: CardSuit.DIAMS,
    1: CardSuit.SPADES,
    2: CardSuit.HEARTS,
    3: CardSuit.CLUBS,
};

export const generateCards = () => {
    const cardsArray = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];

    let cardId = 0;

    const convertedCard: Record<string, ICardOptions> = cardsArray.reduce(
        (acc, item) => {
            const newObject: Record<string, ICardOptions> = {};

            [0, 1, 2, 3].forEach((c) => {
                newObject[cardId] = {
                    rank: item,
                    suit: suitHelper[c],
                };

                cardId++;
            });

            return { ...acc, ...newObject };
        },
        {}
    );

    return convertedCard;
};
