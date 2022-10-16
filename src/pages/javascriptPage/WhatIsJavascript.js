import React from "react";
import styled from "styled-components";

const WhatIsJavascriptContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function WhatIsJavascript(props) {
  return (
    <WhatIsJavascriptContainer>
      <div>WhatIsJavascriptContainer</div>
    </WhatIsJavascriptContainer>
  );
}

export default WhatIsJavascript;
