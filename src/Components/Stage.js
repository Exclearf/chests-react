import styled from "styled-components";
import { CardStack } from "./CardStack";
import { PlayerCardsWrapper } from "./PlayerCardsWrapper";
import { useContext, useReducer, useState } from "react";
import { PlayerStackContext } from "../Contexts/PlayerStackContext";

const StageWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #35654d;
  border: solid 30px #a1662f;
  border-radius: 50px;
  display: grid;
  justify-items: center;
  grid: 1fr 2fr 2fr 2.3fr / 1fr 2fr;
  transform: rotateX(20deg) rotateY(0deg);
  transform-style: preserve-3d;
  perspective: 200px;
  grid-template-areas:
    "EnemyCardsWrapper EnemyCardsWrapper"
    ". CardStack"
    ". CardStack"
    "PlayerCardsWrapper PlayerCardsWrapper";
`;

export const Stage = ({ children }) => {
  const [turn, setTurn] = useState(true)
  const [playerCardStack, setPlayerCardStack] = useState([]);
  const [enemyCardStack, setEnemyCardStack] = useState([]);

  const [tasks, dispatch] = useReducer(tasksReducer, [
    playerCardStack,
    enemyCardStack,
  ]);

  function tasksReducer(tasks, action) {
    let updatedTasks = JSON.parse(JSON.stringify(tasks));
    switch (action.type) {
      case "cardTaken": {
        //If it's players turn to take a card
        if (turn) {
          updatedTasks[0].push(action.takenCard);
          break;
        } else {
          updatedTasks[1].push(action.takenCard)
        }
        break;
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
    //setTurn(!turn);
    return updatedTasks;
  }

  return (
    <StageWrapper>
      <CardStack dispatch={dispatch} />
      <PlayerCardsWrapper playerCards={tasks[0]} />
    </StageWrapper>
  );
};
