import React from "react";
import styled from "styled-components";

const CardStyled = styled.img`
  height: 150px;
  width: 75px;
  content: url(${(props) =>
    props.card.isFrontUp ? props.card.front : props.card.back});
    ${props => props.isAbsolute ? `position: absolute;` : ''}
    ${props => `bottom: ${props.bottom}px`}
`;

export const Card = ({ card, isAbsolute, bottom }) => <CardStyled card={card} isAbsolute={isAbsolute} bottom={bottom}/>;
