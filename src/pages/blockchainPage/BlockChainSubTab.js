import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubTab = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 30px;
  div {
    margin-bottom: 10px;
  }
`;

function BlockChainSubTab(props) {
  return (
    <>
      <SubTab>
        <div>
          <Link to={`/blockchain/whatisblockchain`}>What is Blockchain?</Link>
        </div>
        <div>
          <Link to={`/blockchain/blockchainstruct`}>Structure</Link>
        </div>
        <div>
          <Link to={`/blockchain/blockchaintransaction`}>Transaction</Link>
        </div>
        <div>
          <Link to={`/blockchain/blockchainmining`}>Mining</Link>
        </div>
        <div>
          <Link to={`/blockchain/blockchainfaq`}>FAQ</Link>
        </div>
      </SubTab>
    </>
  );
}

export default BlockChainSubTab;
