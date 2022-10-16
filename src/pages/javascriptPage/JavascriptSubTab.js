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

function JavascriptSubTab(props) {
  return (
    <>
      <SubTab>
        <div>
          <Link to={`/javascript/whatisjavascript`}>What is Javascript?</Link>
        </div>
        <div>
          <Link to={`/javascript/content01`}>Content</Link>
        </div>
        <div>
          <Link to={`/javascript/JavasscriptMemoryData`}>JavaScriptData</Link>
        </div>
      </SubTab>
    </>
  );
}

export default JavascriptSubTab;
