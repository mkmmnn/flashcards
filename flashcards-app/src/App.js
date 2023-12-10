import styled from "styled-components";
import Deck from "./Deck";
import AddDeck from "./AddDeck";
import Header from "./Header";
import { useState } from "react";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 16px;
  align-items: center;
`;

const SectionWrapper = styled.div`
  border: 3px solid black;
  border-bottom: 0px;
  width: 100%;
  max-width: 500px;
  min-height: 44px;
  &:nth-last-child(1) {
    border: 3px solid black;
  }
`;

const App = () => {
  const [decks, setDecks] = useState([]);
  return (
    <Main>
      <SectionWrapper>
        <Header>flashcards</Header>
      </SectionWrapper>
      {decks.map((deck) => (
        <SectionWrapper key={deck}>
          <Deck deck={deck}></Deck>
        </SectionWrapper>
      ))}
      <SectionWrapper>
        <AddDeck decks={decks} setDecks={setDecks} />
      </SectionWrapper>
    </Main>
  );
};

export default App;
