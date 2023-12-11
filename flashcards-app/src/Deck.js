import styled from "styled-components";
import { useState } from "react";

const DeckWrapper = styled.div``;

const DeckHeading = styled.button`
  background: none;
  font-size: 24px;
  line-height: 28px;
  padding: 8px;
  font-family: helvetica;
  border: none;
  text-align: left;
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

const CurrentCard = styled.div`
  width: 100%;
  height: 188px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: helvetica;
  font-size: 32px;
`;

const GuessForm = styled.form`
  border-top: 3px solid black;
  width: 100%;
  display: flex;
  height: 30px;
`;

const GuessInput = styled.input`
  border: none;
  text-align: right;
  font-size: 20px;
  padding: 0 8px;
  width: 100%;
  &:focus {
    background-color: #bad5ee;
  }
  &:hover {
    background-color: #bad5ee;
  }
`;

const SubmitGuessButton = styled.button`
  font-family: helvetica;
  font-weight: bold;
  font-size: 20px;
  background: none;
  border: none;
  border-left: 3px solid black;
  text-align: right;
  &:focus {
    background-color: #bad5ee;
    cursor: pointer;
  }
  &:hover {
    background-color: #bad5ee;
    cursor: pointer;
  }
`;

const Deck = ({ deck }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState("learn");
  const [currentCard, setCurrentCard] = useState({ "je t'aime": "i love you" });
  const [currentGuess, setCurrentGuess] = useState("");

  const handleGuess = (event) => {
    event.preventDefault();
    if (currentGuess === Object.values(currentCard)[0]) {
      console.log("success");
      // pull new card from deck
      setCurrentGuess("");
    }
  };
  return (
    <DeckWrapper>
      {isExpanded ? (
        <ExpandedDeckHeading onClick={() => setIsExpanded(!isExpanded)}>
          {deck}
        </ExpandedDeckHeading>
      ) : (
        <DeckHeading onClick={() => setIsExpanded(!isExpanded)}>
          {deck}
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
            <>
              <CurrentCard>{Object.keys(currentCard)[0]}</CurrentCard>
              <GuessForm onSubmit={handleGuess}>
                <GuessInput
                  placeholder={"guess"}
                  value={currentGuess}
                  onChange={(e) => setCurrentGuess(e.target.value)}
                ></GuessInput>
                <SubmitGuessButton type="submit">submit</SubmitGuessButton>
              </GuessForm>
            </>
          ) : (
            <div>create</div>
          )}
        </DeckContents>
      )}
    </DeckWrapper>
  );
};
export default Deck;
