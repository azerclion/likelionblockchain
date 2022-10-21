import styled from "styled-components";
const JavascriptContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
  line-height: 2.5;
  padding-left: 4px;
`;

const TableContainer = styled.tbody`
  margin-top: 12px;
  padding: 6px;

  tr {
    border: solid 1px black;
  }

  td {
    border: solid 1px black;
    padding: 2px 5px;
  }
`;

function JavaScriptData() {
  return (
    <JavascriptContainer>
      <div>
        <h1>자바스크립트의 가변값과 불변값에 대하여</h1>
        <hr />
        <p>
          불변값이란 변하지 않음을 의미하지만, 엄밀히 따지면 변한다. 아래에서 그
          이유를 설명하겠다.
        </p>
        <p>
          불변값 string number bigint boolean undefined symbol null (primitive
          type)
        </p>
        <details>
          <summary>지루한 이야기...</summary>
          <p>var a=6;</p>
          <p>a=7</p>
          <p>
            console.log(a)로 출력하면 콘솔창에 숫자 7 나올 것이다. 과정은 어떻게
            이루어질까?
          </p>

          <table>
            <tbody>
              <TableContainer>
                <tr>
                  <td>주소:001</td>
                  <td>변수 a ,값: 주소(123)</td>
                </tr>
              </TableContainer>
              <TableContainer>
                <tr>
                  <td>주소:123</td>
                  <td>값:6</td>
                </tr>
              </TableContainer>
            </tbody>
          </table>

          <p>우선, 메모리를 살펴보면 a 주소(123) {"->"} 6 주소(456)</p>
          <p>7로 변경하면 a 주소(123) {"->"} 7 주소(789) 연결 </p>
        </details>

        <hr />

        <h1>불변값 제외 모두 가변값</h1>
        <p>let data = count {":"} 1</p>
        <p>
          data 주소가 {"->"} count 주소를 참조하고, count 주소는 {"->"} 숫자 1
          주소를 참조한다.{" "}
        </p>
        <p>
          data(123) {"->"} count(456) {"->"} 1 (789)
        </p>
        <p>작성중....</p>
      </div>
    </JavascriptContainer>
  );
}

export default JavaScriptData;
