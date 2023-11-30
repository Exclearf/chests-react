const fullDeck = [];

const suits = ['C', 'D', 'H', 'S'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let id = 0;

for (const suit of suits) {
    for (const value of values) {
        fullDeck.push({
            id: id++,
            value: value,
            suit: suit,
            front: `../playingCards/${value}_of_${suit === 'C' ? 'clubs' : suit === 'D' ? 'diamonds' : suit === 'H' ? 'hearts' : 'spades'}.png`,
            back: '../playingCards/back_of_card.png',
            isFrontUp: false
        });
    }
}

export const getFullDeck = () => {
    return fullDeck;
}