import styled from "styled-components";
import { useCardStack } from "../Hooks/useCardStack";
import { getFullDeck } from "../cardHelper";

import { Card } from "./Card";

const CardStackWrapper = styled.div`
  grid-area: CardStack;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardStackCardWrapper = styled.div`
  position: absolute;
  bottom: calc(10% + ${(props) => props.offset / 5 + "px"});
  left: calc(50% + ${(props) => props.offset / 10 + "px"});
`;

export const CardStack = ({dispatch}) => {
  const [currentCardStack, getTopCard] = useCardStack(getFullDeck());

  const handleClick = () => {
    let topCard = getTopCard(); 
    if(topCard)
        dispatch({
        type: 'cardTaken',
        takenCardId: topCard.id,
        takenCard: topCard
    });
  };

  return (
    <CardStackWrapper onClick={handleClick}>
      {currentCardStack.map((card) => (
        <CardStackCardWrapper offset={card.id}>
          <Card key={card.id} card={card} />
        </CardStackCardWrapper>
      ))}
    </CardStackWrapper>
  );
};
