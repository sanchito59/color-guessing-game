import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ColorSquare = styled.div`
  border: 4px solid white;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin: 40px;
  background: ${(props) => props.color};
  visibility: ${(props) => props.visible};

  transition: border 0.5s;
  :hover {
    border: 3px solid black;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    margin: 16px;
  }
`;

const ColorBlock = ({ color, pickedColor, checkColor }) => {
  const [visible, setVisibility] = useState("visible");

  useEffect(() => {
    setVisibility("visible");
  }, [color]);

  return (
    <ColorSquare
      color={color}
      visible={visible}
      onClick={() => setVisibility(checkColor(color, pickedColor))}
    />
  );
};

ColorBlock.propTypes = {
  color: PropTypes.string,
  pickedColor: PropTypes.string,
  checkColor: PropTypes.func,
};

export default ColorBlock;
