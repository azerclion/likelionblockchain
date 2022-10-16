import React from "react";
import styled from "styled-components";

const BlockchainMiningContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function BlockchainMining(props) {
  return (
    <BlockchainMiningContainer>
      <div>BlockchainMiningContainer</div>
    </BlockchainMiningContainer>
  );
}

export default BlockchainMining;
