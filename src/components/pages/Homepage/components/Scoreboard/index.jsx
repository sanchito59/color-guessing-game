import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
    <div>
      <div>SCOREBOARD</div>
      <>Games Won: {gamesWon}</>
    </div>
  );
};

Scoreboard.propTypes = {
  correct: PropTypes.bool,
};

export default Scoreboard;
