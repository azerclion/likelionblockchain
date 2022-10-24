import React from "react";
import styled from "styled-components";

const JavascriptContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function JavascriptContent(props) {
  return (
    <JavascriptContentContainer>
      <div>
        JavascriptContentContainer
        <div>
          <h2>자바스크립트 타입 유형</h2>
          <h2>호이스팅</h2>
        </div>
      </div>
    </JavascriptContentContainer>
  );
}

export default JavascriptContent;
