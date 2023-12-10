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
  padding: 0px;
`;

const ToggleOption = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  line-height: 28px;
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [mode, setMode] = useState("learn");
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
              style={mode === "create" ? { backgroundColor: "#f4dd8c" } : {}}
            >
              create
            </ToggleOption>
          </ModeToggle>
          <div style={{ height: "200px" }}></div>
        </DeckContents>
      )}
    </DeckWrapper>
  );
};
export default Deck;
