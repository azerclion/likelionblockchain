import React from "react";
import styled from "styled-components";

const ReactContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function ReactContent(props) {
  return (
    <ReactContentContainer>
      <div>
        <h1>리액트 핵심코드</h1>
      </div>
    </ReactContentContainer>
  );
}

export default ReactContent;
