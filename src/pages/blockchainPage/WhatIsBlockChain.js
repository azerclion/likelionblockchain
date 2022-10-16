import React from "react";
import styled from "styled-components";

const WhatBlockChainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function WhatIsBlockChain(props) {
  return (
    <WhatBlockChainContainer>
      <div>WhatBlockChainContainer</div>
    </WhatBlockChainContainer>
  );
}

export default WhatIsBlockChain;
