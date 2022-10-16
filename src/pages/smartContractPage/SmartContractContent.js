import React from "react";
import styled from "styled-components";

const SmartContractContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function SmartContractContent(props) {
  return (
    <SmartContractContentContainer>
      <div>SmartContractContentContainer</div>
    </SmartContractContentContainer>
  );
}

export default SmartContractContent;
