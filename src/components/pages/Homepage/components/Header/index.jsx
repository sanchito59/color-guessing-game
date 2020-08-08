import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContentHeader = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: 4px;
  padding-bottom: 24px;
  background: ${(props) =>
    props.correct ? props.pickedColor : "rgb(68, 120, 197)"};
  color: white;
  font-family: "Dosis", sans-serif;

  h1 {
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
    font-size: 3em;
  }
`;

const PickedColor = styled.span`
  font-size: 18px;
  text-decoration: underline;
`;

const Header = ({ correct, pickedColor }) => {
  return (
    <ContentHeader correct={correct} pickedColor={pickedColor}>
      <div>
        <h1>Color Guessing Game</h1>
        <p>
          Guess which block is: <PickedColor>{pickedColor}</PickedColor>
        </p>
      </div>
    </ContentHeader>
  );
};

Header.propTypes = {
  correct: PropTypes.bool,
  pickedColor: PropTypes.string,
};

export default Header;
