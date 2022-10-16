import React from "react";
import styled from "styled-components";

const JavascriptContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function Javascript(props) {
  return <JavascriptContainer>자바스크립트 소개 페이지</JavascriptContainer>;
}

export default Javascript;
