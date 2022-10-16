import React from "react";
import styled from "styled-components";

const BlockchainStructContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function BlockchainStruct(props) {
  return (
    <BlockchainStructContainer>BlockchainStruct</BlockchainStructContainer>
  );
}

export default BlockchainStruct;
