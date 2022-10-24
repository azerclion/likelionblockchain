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

function ReactSubTab(props) {
  return (
    <>
      <SubTab>
        <div>
          <Link to={`/react/whatisreact`}>리액트란 무엇인가?</Link>
        </div>
        <div>
          <Link to={`/react/content01`}>리액트 코드</Link>
        </div>
      </SubTab>
    </>
  );
}

export default ReactSubTab;
