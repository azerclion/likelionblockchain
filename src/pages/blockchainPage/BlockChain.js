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
  return (
    <BlockChainContainer>
      블록체인 소개 페이지
      <div>
        <p>자 이제 정리해 볼까요?</p>
      </div>
    </BlockChainContainer>
  );
}

export default BlockChain;
