import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Game from "./components/Game";

const MenuBar = styled.section`
  display: flex;
  justify-content: center;
`;

const MenuButton = styled.button`
  border: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  letter-spacing: 1.5px;
  background: white;
  color: grey;
  outline: none;

  transition: background 0.3s, color 0.3s;
  :hover {
    background: grey;
    color: white;
    cursor: pointer;
  }
`;

const DifficultyButton = styled(MenuButton)`
  margin: 0px 4px;

  background: ${(props) =>
    props.buttonDifficulty === props.gameDifficulty ? "grey" : "white"};

  color: ${(props) =>
    props.buttonDifficulty === props.gameDifficulty ? "white" : "grey"};
`;

const Message = styled.span`
  width: 20%;
  padding: 8px 0px;
  text-align: center;
  letter-spacing: 1.5px;
  color: grey;
`;

const Homepage = () => {
  const [difficulty, setDifficulty] = useState(6);
  const [gameColors, setGameColors] = useState([
    "rgb(91, 99, 77)",
    "rgb(200, 88, 111)",
    "rgb(90, 90, 88)",
    "rgb(100, 110, 120)",
    "rgb(91, 200, 105)",
    "rgb(8, 38, 240)",
  ]);
  const [pickedColor, setPickedColor] = useState("rgb(200, 88, 111)");
  const [correct, setCorrect] = useState(false);
  const [message, setMessage] = useState("");
  const [playButtonMessage, setPlayButtonMessage] = useState("NEW COLORS");

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const generateRandomColors = (num) => {
    let colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(randomColor());
    }
    return colors;
  };

  const pickColor = () => {
    const randomIndex = Math.floor(Math.random() * gameColors.length);
    return gameColors[randomIndex];
  };

  const resetGame = () => {
    setGameColors(generateRandomColors(difficulty));
    setPickedColor(pickColor());
    setPlayButtonMessage("NEW COLORS");
    setMessage("");
  };

  const init = () => {
    setGameColors(generateRandomColors(difficulty));
    setPickedColor(pickColor());
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Header pickedColor={pickedColor} correct={correct} />
      <MenuBar changeColors={setGameColors} changeDifficulty={setDifficulty}>
        <MenuButton onClick={() => resetGame()}>{playButtonMessage}</MenuButton>
        <Message>{message}</Message>
        <DifficultyButton
          onClick={() => setDifficulty(3)}
          buttonDifficulty={3}
          gameDifficulty={difficulty}
        >
          EASY
        </DifficultyButton>
        <DifficultyButton
          onClick={() => setDifficulty(6)}
          buttonDifficulty={6}
          gameDifficulty={difficulty}
        >
          MEDIUM
        </DifficultyButton>
        <DifficultyButton
          onClick={() => setDifficulty(9)}
          buttonDifficulty={9}
          gameDifficulty={difficulty}
        >
          HARD
        </DifficultyButton>
      </MenuBar>
      <Game
        pickedColor={pickedColor}
        colors={gameColors}
        handleCorrect={setCorrect}
        handleMessage={setMessage}
        handleButtonMessage={setPlayButtonMessage}
      />
    </>
  );
};

export default Homepage;
