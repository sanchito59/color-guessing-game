import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Game from "./components/Game";

const Homepage = () => {
  const [difficulty, setDifficulty] = useState(6);
  const [colors, setColors] = useState([]);
  const [pickedColor, setPickedColor] = useState("rgb(255, 255, 255)");
  const [correct, setCorrect] = useState(false);

  return (
    <>
      <Header pickedColor={pickedColor} correct={correct} />
      <MenuBar />
      <Game />
    </>
  );
};

export default Homepage;
