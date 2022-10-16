import React from "react";
import styled from "styled-components";

const WhatIsSmartContractContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function WhatIsSmartContract(props) {
  return (
    <WhatIsSmartContractContainer>
      <div>WhatIsSmartContractContainer</div>
    </WhatIsSmartContractContainer>
  );
}

export default WhatIsSmartContract;
