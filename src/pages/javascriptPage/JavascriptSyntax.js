import spread from "../../assets/txt/spreadExample.txt";
import styled from "styled-components";
const JavascriptSyntaxContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 16px;
  padding-left: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: gainsboro;
`;

function JavascriptSyntax() {
  fetch(spread)
    .then((res) => res)
    .then((res) => res.text())
    .then((result) => {
      const element = document.getElementById("text");
      element.innerText = result;
    });
  return (
    <JavascriptSyntaxContainer>
      <p id="text"></p>
    </JavascriptSyntaxContainer>
  );
}

export default JavascriptSyntax;
