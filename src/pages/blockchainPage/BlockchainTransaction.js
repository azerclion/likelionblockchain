import React from "react";
import styled from "styled-components";

const BlockchainTransactionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function BlockchainTransaction(props) {
  return (
    <BlockchainTransactionContainer>
      BlockchainTransactionContainer
    </BlockchainTransactionContainer>
  );
}

export default BlockchainTransaction;
