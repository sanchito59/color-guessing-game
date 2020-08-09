import React from "react";
import ColorBlock from "./components/ColorBlock";
import styled from "styled-components";

type Props = {
  colors: Array<string>;
  correct: Boolean;
  difficulty: number;
  pickedColor: string;
  handleCorrect: Function;
  handleGameColors: Function;
  handleMessage: Function;
  handleButtonMessage: Function;
};

const GameSection = styled.section`
  padding: 64px 0px;
  display: flex;
  justify-content: center;
  background: rgb(22, 20, 68);
  background: linear-gradient(
    90deg,
    rgba(22, 20, 68, 1) 0%,
    rgba(32, 32, 72, 1) 100%
  );

  @media (max-width: 767px) {
    padding: 32px 0px;
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
`;

const Game: React.FC<Props> = ({
  colors,
  correct,
  difficulty,
  pickedColor,
  handleCorrect,
  handleGameColors,
  handleMessage,
  handleButtonMessage,
}: Props) => {
  const changeColors = (color: string) => {
    colors = [];
    for (let i = 0; i < difficulty; i++) {
      colors.push(color);
    }
    handleGameColors(colors);
  };

  const checkColor = (divColor: string, correctColor: string) => {
    if (divColor === correctColor) {
      changeColors(correctColor);
      handleCorrect(true);
      handleMessage("CORRECT!");
      handleButtonMessage("PLAY AGAIN?");

      let existing: string[] = [];

      if (localStorage.getItem("gamesWon") != null) {
        existing = localStorage.getItem("gamesWon")?.split(",")!;
        existing.push("1");
      }
      localStorage.setItem("gamesWon", existing.toString());

      return "visible";
    } else {
      handleMessage("TRY AGAIN");
      return "hidden";
    }
  };

  return (
    <GameSection>
      <ColorGrid>
        {colors.map((color: string, index: number) => {
          return (
            <ColorBlock
              key={index}
              color={color}
              correct={correct}
              pickedColor={pickedColor}
              checkColor={checkColor}
              visible={"visible"}
            />
          );
        })}
      </ColorGrid>
    </GameSection>
  );
};

export default Game;
