import React, { useState } from "react";
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
  return (
    <ColorSquare
      color={color}
      visible={visible}
      onClick={() => setVisibility(checkColor(color, pickedColor))}
    />
  );
};

export default ColorBlock;
