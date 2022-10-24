import React from "react";
import styled from "styled-components";

const WhatIsReactContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function WhatIsReact(props) {
  return (
    <WhatIsReactContainer>
      <div>
        <h1>리액트</h1>
        </div>
    </WhatIsReactContainer>
  );
}

export default WhatIsReact;
