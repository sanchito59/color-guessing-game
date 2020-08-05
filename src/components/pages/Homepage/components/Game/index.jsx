import React from "react";
import ColorBlock from "./components/ColorBlock";
import styled from "styled-components";

const GameSection = styled.section`
  padding: 64px 0px;
  display: flex;
  justify-content: center;
  background: rgb(74, 75, 77);

  @media (max-width: 767px) {
    padding: 32px 0px;
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;

  @media (max-width: 767px) {
    grid-template-columns: 50% 50%;
  }
`;

const Game = ({
  colors,
  difficulty,
  pickedColor,
  handleCorrect,
  handleGameColors,
  handleMessage,
  handleButtonMessage,
}) => {
  const changeColors = (color) => {
    colors = [];
    for (let i = 0; i < difficulty; i++) {
      colors.push(color);
    }
    handleGameColors(colors);
  };

  const checkColor = (divColor, correctColor) => {
    if (divColor === correctColor) {
      changeColors(correctColor);
      handleCorrect(true);
      handleMessage("CORRECT!");
      handleButtonMessage("PLAY AGAIN?");
      changeColors(correctColor);
      return "visible";
    } else {
      handleMessage("TRY AGAIN");
      return "hidden";
    }
  };

  return (
    <GameSection>
      <ColorGrid>
        {colors.map((color, index) => {
          return (
            <ColorBlock
              key={index}
              color={color}
              pickedColor={pickedColor}
              checkColor={checkColor}
            />
          );
        })}
      </ColorGrid>
    </GameSection>
  );
};

export default Game;
