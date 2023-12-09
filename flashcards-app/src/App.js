import styled from "styled-components";

const Main = styled.main`
  display: grid;
  margin: 16px;
  border: 3px solid black;
  padding: 8px;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  font-family: helvetica;
`;

function App() {
  return (
    <Main>
      <Heading>flashcards</Heading>
    </Main>
  );
}

export default App;
