import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContentHeader = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 0px;
  background: ${(props) => (props.correct ? props.pickedColor : "grey")};
  color: white;
`;

const Header = ({ correct, pickedColor }) => {
  return (
    <ContentHeader correct={correct} pickedColor={pickedColor}>
      <div>
        <h1>Color Guessing Game</h1>
        <p>
          Guess which block is: <span>{pickedColor}</span>
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
