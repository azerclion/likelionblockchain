import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

import BlockChainSubTab from "./blockchainPage/BlockChainSubTab";
import SmartContractSubTab from "./smartContractPage/SmartContractSubTab";
import JavascriptSubTab from "./javascriptPage/JavascriptSubTab";
import ReactSubTab from "./reactPage/ReactSubTab";

const NaviContainer = styled.div`
  width: 400px;
  height: 100vh;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: aliceblue;
`;
const TabContainer = styled.div``;
const Title = styled.div`
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
`;
const Tab = styled.div`
  margin-bottom: 10px;
`;
const LinkContainer = styled.div``;

function Navigation(props) {
  const [pulldownBlockChain, setPulldownBlockChain] = useState(false);
  const [pulldownSmartContract, setPulldownSmartContract] = useState(false);
  const [pulldownJavascript, setPulldownJavascript] = useState(false);
  const [pulldownReact, setPulldownReact] = useState(false);

  return (
    <NaviContainer>
      <TabContainer>
        <Title>LIKELION BLOCKCHAIN SCHOOL</Title>
        <Tab>
          <LinkContainer
            onClick={() => setPulldownBlockChain(!pulldownBlockChain)}
          >
            <Link to={`/blockchain`}>
              {pulldownBlockChain ? <BiChevronDown /> : <BiChevronRight />}
              BLOCKCHAIN
            </Link>
          </LinkContainer>
          {pulldownBlockChain ? <BlockChainSubTab /> : <></>}
        </Tab>
        <Tab>
          <LinkContainer
            onClick={() => setPulldownSmartContract(!pulldownSmartContract)}
          >
            <Link to={`/smartcontract`}>
              {pulldownSmartContract ? <BiChevronDown /> : <BiChevronRight />}
              SMART CONTRACT
            </Link>
          </LinkContainer>
          {pulldownSmartContract ? <SmartContractSubTab /> : <></>}
        </Tab>
        <Tab>
          <LinkContainer
            onClick={() => setPulldownJavascript(!pulldownJavascript)}
          >
            <Link to={`/javascript`}>
              {pulldownJavascript ? <BiChevronDown /> : <BiChevronRight />}
              JAVASCRIPT
            </Link>
          </LinkContainer>
          {pulldownJavascript ? <JavascriptSubTab /> : <></>}
        </Tab>
        <Tab>
          <LinkContainer onClick={() => setPulldownReact(!pulldownReact)}>
            <Link to={`/react`}>
              {pulldownReact ? <BiChevronDown /> : <BiChevronRight />}
              REACT
            </Link>
          </LinkContainer>
          {pulldownReact ? <ReactSubTab /> : <></>}
        </Tab>
        <Tab>ETHEREUM</Tab>
        <Tab>WEB3js</Tab>
        <Tab>REACT THREE</Tab>
      </TabContainer>
    </NaviContainer>
  );
}

export default Navigation;
