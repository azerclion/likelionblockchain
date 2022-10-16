import React from "react";
import styled from "styled-components";

const BlockChainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function BlockChain(props) {
  return <BlockChainContainer>블록체인 소개 페이지</BlockChainContainer>;
}

export default BlockChain;
