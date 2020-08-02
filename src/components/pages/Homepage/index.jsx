import React, { useState } from "react";
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

  transition: background 0.3s, color 0.3s;
  :hover {
    background: grey;
    color: white;
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
`;

const Homepage = () => {
  const [difficulty, setDifficulty] = useState(6);
  const [colors, setColors] = useState([]);
  const [pickedColor, setPickedColor] = useState("rgb(91, 237, 240)");
  const [correct, setCorrect] = useState(false);
  const [message, setMessage] = useState("");

  const init = () => {
    console.log("initialized");
  };
  init();

  return (
    <>
      <Header pickedColor={pickedColor} correct={correct} />
      <MenuBar changeColors={setColors} changeDifficulty={setDifficulty}>
        <MenuButton>NEW COLORS</MenuButton>
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
      <Game />
    </>
  );
};

export default Homepage;
