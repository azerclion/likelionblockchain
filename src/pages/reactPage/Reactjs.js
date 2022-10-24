import React from "react";
import styled from "styled-components";

const ReactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function Reactjs(props) {
  return <ReactContainer>리액트 소개 페이지.DS</ReactContainer>;
}

export default Reactjs;
