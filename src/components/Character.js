import React from "react";
import styled from "styled-components";

const StarStyle = styled.div`
  display: flex;
  justify-content: center;

  margin: 10% 15% 0;
  background-color: green;
  border: solid black;
  padding: 5%;
`;

const Character = (props) => {
  const { info } = props;
  return (
    <StarStyle>
      <h1>
        <b>{info.name}</b>
      </h1>
    </StarStyle>
  );
};

export default Character;
