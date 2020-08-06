import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ScoreboardContainer = styled.section`
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
  padding: 24px 0px;
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

const Scoreboard = ({ correct }) => {
  const [gamesWon, setGamesWon] = useState(
    localStorage.getItem("gamesWon") != null
      ? localStorage.getItem("gamesWon").split(",").length - 1
      : 0
  );

  useEffect(() => {
    if (correct === true) {
      let wins = localStorage.getItem("gamesWon");
      setGamesWon(wins.split(",").length - 1);
    }
  }, [correct]);

  return (
    <ScoreboardContainer>
      <ScoreboardTitle>SCOREBOARD</ScoreboardTitle>
      <ScoreboardTitle>Games Won: {gamesWon}</ScoreboardTitle>
    </ScoreboardContainer>
  );
};

Scoreboard.propTypes = {
  correct: PropTypes.bool,
};

export default Scoreboard;
