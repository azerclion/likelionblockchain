import React from "react";
import styled from "styled-components";

const WhatIsReactContainer = styled.div`
  color: blue;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function WhatIsReact(props) {
  return (
    <WhatIsReactContainer>
      <div>
        <h1>리액트</h1>
        <p>
          React는 웹 프레임워크로, 자바스크립트 라이브러리의 하나로서 사용자
          인터페이스를 만들기 위해 사용된다.
        </p>
        <h2>React의 필요성</h2>
        <p>
          react를 사용하지 않아도, html과 css, javascript를 이용해서 웹 페이지를
          만들 수 있지만, react를 이용해 사용자와 상호작용할 수 있는 동적인 UI를
          쉽게 만들 수 있기 때문에 많이 이용되는 것 같습니다..!
        </p>
        <h3>React 특징</h3>
        <p>
          React의 특징은 크게 다음과 같이 구분해보았습니다. 1. Data Flow 2.
          Component 기반 구조 3. Virtual Dom 4. Props and State 5. JSX
        </p>
      </div>
    </WhatIsReactContainer>
  );
}

export default WhatIsReact;
