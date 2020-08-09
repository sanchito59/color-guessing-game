import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  correct: Boolean;
};

const ScoreboardContainer = styled.section`
  padding-bottom: 100px;

  background: rgb(22, 20, 68);
  background: linear-gradient(
    90deg,
    rgba(22, 20, 68, 1) 0%,
    rgba(32, 32, 72, 1) 100%
  );
`;

const ScoreboardTitle = styled.h1`
  font-size: 40px;
  letter-spacing: 4px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 12px;
  padding-bottom: 24px;
  background-image: linear-gradient(
    90deg,
    rgba(199, 0, 205, 1) 0%,
    rgba(91, 12, 121, 1) 100%,
    rgba(22, 20, 68, 1) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Scoreboard = ({ correct }: Props) => {
  const [gamesWon, setGamesWon] = useState(0);

  useEffect(() => {
    if (correct === true) {
      let wins: string[] = [];
      if (localStorage.getItem("gamesWon") != null) {
        wins = localStorage.getItem("gamesWon")?.split(",")!;
      }
      setGamesWon(wins.length - 1);
    }
  }, [correct]);

  const init = () => {
    let wins: string[] = [];
    if (localStorage.getItem("gamesWon") != null) {
      wins = localStorage.getItem("gamesWon")?.split(",")!;
    }
    setGamesWon(wins.length === 0 ? 0 : wins.length - 1);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ScoreboardContainer>
      <ScoreboardTitle>SCOREBOARD</ScoreboardTitle>
      <ScoreboardTitle>Games Won: {gamesWon}</ScoreboardTitle>
    </ScoreboardContainer>
  );
};

export default Scoreboard;
