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
          <p>어쩌고 저쩌고....</p>
        </div>
      </div>
    </JavascriptContentContainer>
  );
}

export default JavascriptContent;
