import styled from "styled-components";
const JavascriptContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function JavaScriptData() {
  return (
    <div>
      <h1>자바스크립트의 가변값과 불변값에 대하여</h1>
      <hr />
      <p>
        불변값이란 변하지 않음을 의미하지만, 엄밀히 따지면 변한다. 아래에서 그
        이유를 설명하겠다.
      </p>
      <p>string number bigint boolean undefined symbol null (primitive type)</p>
      <details>
        <summary>지루한 이야기...</summary>
        <p>var a=6;</p>
        <p>a=7</p>
        <p>
          console.log(a)로 출력하면 콘솔창에 숫자 7 나올 것이다. 과정은 어떻게
          이루어질까?
        </p>
        <p>
          우선, 메모리를 살펴보면 주소(123)를 확보한 공간에 a로 지정하고, 또
          다른 주소(456)를 확보해서 숫자 6을 지정한다. 그런 다음에 주소(123)에는
          값을 보유한 주소(456)을 가르킨다.
        </p>
        <p>주소(123){"->"}주소(456)</p>
        <p>a=7을 실행하는 과정에서 주소(123)은 to be continued...(작성중)</p>
      </details>
    </div>
  );
}

export default JavaScriptData;
