import styled from "styled-components";
import { useState } from "react";

const DeckAdderWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AddButton = styled.button`
  margin: 0;
  background: unset;
  border-color: unset;
  border-style: unset;
  font-size: 24px;
  line-height: 28px;
  font-family: helvetica;
  font-weight: bold;
  overflow-wrap: anywhere;
  padding: 8px;
  min-width: 100px;
  text-align: right;
  border-left: 3px solid black;
  flex-shrink: 0;
  &:focus {
    background-color: var(--green);
    cursor: pointer;
  }
  &:hover {
    background-color: var(--green);
    cursor: pointer;
  }
`;

const NewDeckInput = styled.input`
  border: none;
  text-align: right;
  font-size: 24px;
  line-height: 28px;
  font-family: helvetica;
  padding: 8px;
  width: 100%;
  &:focus {
    background-color: var(--yellow);
  }
  &:hover {
    background-color: var(--yellow);
  }
`;

const AddDeck = ({ decks, setDecks }) => {
  const [currDeckName, setCurrDeckName] = useState("");
  const handleNewDeck = (event) => {
    event.preventDefault();
    const nextDecks = [...decks];
    const newDeck = { id: decks.length + 1, name: currDeckName, cards: [] };
    nextDecks.push(newDeck);
    setDecks(nextDecks);
    setCurrDeckName("");
  };
  return (
    <DeckAdderWrapper onSubmit={handleNewDeck}>
      <NewDeckInput
        placeholder={"name"}
        value={currDeckName}
        onChange={(e) => setCurrDeckName(e.target.value)}
        required
        min={0}
      ></NewDeckInput>
      <AddButton type="submit">new deck</AddButton>
    </DeckAdderWrapper>
  );
};
export default AddDeck;
