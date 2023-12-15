import styled from "styled-components";
import { useState } from "react";
import LearnDeck from "./LearnDeck";
import EmptyDeck from "./EmptyDeck";

const DeckWrapper = styled.div``;

const DeckHeading = styled.button`
  background: none;
  font-size: 24px;
  line-height: 28px;
  padding: 8px;
  font-family: helvetica;
  border: none;
  text-align: left;
  word-wrap: break-word;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: var(--blue);
  }
  &:focus {
    background-color: var(--blue);
  }
`;

const ModeToggle = styled.div`
  width: 100%;
  border-bottom: 3px solid black;
  display: flex;
  height: 30px;
`;

const ToggleOption = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  &:nth-last-child(1) {
    border-left: 3px solid black;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ExpandedDeckHeading = styled(DeckHeading)`
  font-weight: bold;
  border-bottom: 3px solid black;
`;

const DeckContents = styled.div`
  margin-left: 44px;
  border-left: 3px solid black;
`;

const Deck = ({ deck }) => {
  const deckName = deck.name;
  const deckCards = deck.cards;
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState("learn");

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <DeckWrapper>
      {isExpanded ? (
        <ExpandedDeckHeading onClick={() => setIsExpanded(!isExpanded)}>
          {deckName}
        </ExpandedDeckHeading>
      ) : (
        <DeckHeading onClick={() => setIsExpanded(!isExpanded)}>
          {deckName}
        </DeckHeading>
      )}

      {isExpanded && (
        <DeckContents>
          <ModeToggle>
            <ToggleOption
              onClick={() => setMode("learn")}
              style={
                mode === "learn" ? { backgroundColor: "var(--yellow)" } : {}
              }
            >
              learn
            </ToggleOption>

            <ToggleOption
              onClick={() => setMode("create")}
              style={
                mode === "create" ? { backgroundColor: "var(--green)" } : {}
              }
            >
              create
            </ToggleOption>
          </ModeToggle>
          {mode === "learn" ? (
            deckCards.length > 0 ? (
              <LearnDeck cards={shuffle(deckCards)}></LearnDeck>
            ) : (
              <EmptyDeck />
            )
          ) : (
            <div>create</div>
          )}
        </DeckContents>
      )}
    </DeckWrapper>
  );
};
export default Deck;
