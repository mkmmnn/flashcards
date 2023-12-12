import styled from "styled-components";
import { useState } from "react";
import LearnDeck from "./LearnDeck";

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
    background-color: #bad5ee;
  }
  &:focus {
    background-color: #bad5ee;
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
  const [deckName] = Object.keys(deck);
  const [deckCards] = Object.values(deck);
  console.log({ deckCards });
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState("learn");

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
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
              style={mode === "learn" ? { backgroundColor: "#f4dd8c" } : {}}
            >
              learn
            </ToggleOption>
            <ToggleOption
              onClick={() => setMode("create")}
              style={mode === "create" ? { backgroundColor: "#a6b536" } : {}}
            >
              create
            </ToggleOption>
          </ModeToggle>
          {mode === "learn" ? (
            <LearnDeck cards={shuffle(deckCards)}></LearnDeck>
          ) : (
            <div>create</div>
          )}
        </DeckContents>
      )}
    </DeckWrapper>
  );
};
export default Deck;
