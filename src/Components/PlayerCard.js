import styled from "styled-components";
import { Card } from "./Card";
import { useState } from "react";

const PlayerCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PlayerCard = ({ currentCardColumn }) => {
  console.log(typeof currentCardColumn);

  const handleClick = () => {
    console.log("You have clicked " + currentCardColumn[0].value);
  }

  return (
    <PlayerCardStyled onClick={handleClick}>
      {currentCardColumn.map((card, index) => (
        <Card card={((card.isFrontUp = true), card)} isAbsolute={true} bottom={index*20}/>
      ))}
    </PlayerCardStyled>
  );
};
