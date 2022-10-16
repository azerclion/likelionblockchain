import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./pages/Navigation";
import Home from "./pages/Home";

import BlockChain from "./pages/blockchainPage/BlockChain";
import WhatIsBlockChain from "./pages/blockchainPage/WhatIsBlockChain";
import BlockchainStruct from "./pages/blockchainPage/BlockchainStruct";
import BlockchainTransaction from "./pages/blockchainPage/BlockchainTransaction";
import BlockchainMining from "./pages/blockchainPage/BlockchainMining";
import BlockchainFaq from "./pages/blockchainPage/BlockchainFaq";
import SmartContract from "./pages/smartContractPage/SmartContract";
import WhatIsSmartContract from "./pages/smartContractPage/WhatIsSmartContract";
import SmartContractContent from "./pages/smartContractPage/SmartContractContent";
import Javascript from "./pages/javascriptPage/Javascript";
import WhatIsJavascript from "./pages/javascriptPage/WhatIsJavascript";
import JavascriptContent from "./pages/javascriptPage/JavascriptContent";
import JavasscriptMemoryData from "./pages/javascriptPage/JavasscriptMemoryData";
import Reactjs from "./pages/reactPage/Reactjs";
import WhatIsReact from "./pages/reactPage/WhatIsReact";
import ReactContent from "./pages/reactPage/ReactContent";

const RouterContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

function Router(props) {
  return (
    <RouterContainer>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blockchain" element={<BlockChain />}></Route>
          <Route
            path="/blockchain/whatisblockchain"
            element={<WhatIsBlockChain />}
          ></Route>
          <Route
            path="/blockchain/blockchainstruct"
            element={<BlockchainStruct />}
          ></Route>
          <Route
            path="/blockchain/blockchaintransaction"
            element={<BlockchainTransaction />}
          ></Route>
          <Route
            path="/blockchain/blockchainmining"
            element={<BlockchainMining />}
          ></Route>
          <Route
            path="/blockchain/blockchainfaq"
            element={<BlockchainFaq />}
          ></Route>

          <Route path="/smartcontract" element={<SmartContract />}></Route>
          <Route
            path="/smartcontract/whatissmartcontract"
            element={<WhatIsSmartContract />}
          ></Route>
          <Route
            path="/smartcontract/content01"
            element={<SmartContractContent />}
          ></Route>

          <Route path="/javascript" element={<Javascript />}></Route>
          <Route
            path="/javascript/whatisjavascript"
            element={<WhatIsJavascript />}
          ></Route>
          <Route
            path="/javascript/content01"
            element={<JavascriptContent />}
          ></Route>
          <Route
            path="/javascript/JavasscriptMemoryData"
            element={<JavasscriptMemoryData />}
          ></Route>

          <Route path="/react" element={<Reactjs />}></Route>
          <Route path="/react/whatisreact" element={<WhatIsReact />}></Route>
          <Route path="/react/content01" element={<ReactContent />}></Route>
        </Routes>
      </BrowserRouter>
    </RouterContainer>
  );
}

export default Router;
