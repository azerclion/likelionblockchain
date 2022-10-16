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

function SmartContract(props) {
  return <BlockChainContainer>스마트컨트랙트 소개 페이지</BlockChainContainer>;
}

export default SmartContract;
