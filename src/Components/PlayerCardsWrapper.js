import styled from "styled-components";
import { Card } from "./Card";
import { PlayerCard } from "./PlayerCard";

const PlayerCardsWrapperStyled = styled.div`
  grid-area: PlayerCardsWrapper;
  display: flex;
  transform: rotateX(-20deg) rotateY(0deg);
    transform-style: preserve-3d;
    width: 40vw;
    margin-bottom: 10vw;
`;

export const PlayerCardsWrapper = ({ playerCards }) => {
  const aggregatedData =  playerCards.reduce((acc, card) => {
    // Use the card's value as the key
    const key = card.value;

    // If the key doesn't exist in the accumulator, initialize it with an empty array
    if (!acc[key]) {
      acc[key] = [];
    }

    // Add the current card to the array for this key
    acc[key].push(card);

    return acc;
  }, {});

  

  return (
    <PlayerCardsWrapperStyled>
      {Object.values(aggregatedData).map((cardColumn) => {
        //card.isFrontUp = true;
        return <PlayerCard currentCardColumn={cardColumn}/>;
      })}
    </PlayerCardsWrapperStyled>
  );
};
