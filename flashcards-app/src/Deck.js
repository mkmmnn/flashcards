import styled from "styled-components";
import { useState } from "react";
import DeckModeToggle from "./DeckModeToggle";
import LearnDeck from "./LearnDeck";
import EmptyDeck from "./EmptyDeck";
import CreateDeck from "./CreateDeck";

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

const ExpandedDeckHeading = styled(DeckHeading)`
  font-weight: bold;
  border-bottom: 3px solid black;
`;

const DeckContents = styled.div`
  margin-left: 44px;
  border-left: 3px solid black;
  min-height: 224px;
  display: flex;
  flex-direction: column;
  font-family: helvetica;
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
    <>
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
        <>
          <DeckModeToggle mode={mode} setMode={setMode} />
          <DeckContents>
            {mode === "learn" ? (
              deckCards.length > 0 ? (
                <LearnDeck cards={shuffle(deckCards)}></LearnDeck>
              ) : (
                <EmptyDeck />
              )
            ) : (
              <CreateDeck cards={deckCards} />
            )}
          </DeckContents>
        </>
      )}
    </>
  );
};
export default Deck;
