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
          <Link to={`/react/whatisreact`}>What is REACT?</Link>
        </div>
        <div>
          <Link to={`/react/content01`}>Content</Link>
        </div>
      </SubTab>
    </>
  );
}

export default ReactSubTab;
