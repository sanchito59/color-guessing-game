import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";

const MotionBlock = styled(motion.div)``;

const ColorSquare = styled.div`
  border: 4px solid white;
  width: 200px;
  height: 200px;
  border-radius: 30px;
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

const ColorBlock = ({ color, correct, pickedColor, checkColor }) => {
  const [visible, setVisibility] = useState("visible");

  useEffect(() => {
    setVisibility("visible");
  }, [color]);

  return (
    <motion.div
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.2, rotate: 90, y: -13 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
    >
      <ColorSquare
        color={color}
        visible={visible}
        onClick={() =>
          !correct && setVisibility(checkColor(color, pickedColor))
        }
      />
    </motion.div>
  );
};

ColorBlock.propTypes = {
  color: PropTypes.string,
  pickedColor: PropTypes.string,
  checkColor: PropTypes.func,
};

export default ColorBlock;
