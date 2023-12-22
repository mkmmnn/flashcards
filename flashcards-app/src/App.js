import styled from "styled-components";
import Deck from "./Deck";
import AddDeck from "./AddDeck";
import Header from "./Header";
import { useState, useEffect } from "react";
import data from "./data.json";

import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

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
  useEffect(() => {
    const decksRef = collection(db, "decks");
    getDocs(decksRef).then((querySnapshot) => {
      let response = [];
      querySnapshot.docs.forEach((doc) => {
        response.push({ id: doc.id, ...doc.data() });
      });
      setDecks(response);
    });
  }, []);
  return (
    <Main>
      <SectionWrapper>
        <Header>flashcards</Header>
      </SectionWrapper>
      {decks.map((deck) => (
        <SectionWrapper key={deck.id}>
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
