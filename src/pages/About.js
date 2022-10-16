import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function About(props) {
  return <HomeContainer>ABOUT</HomeContainer>;
}

export default About;
