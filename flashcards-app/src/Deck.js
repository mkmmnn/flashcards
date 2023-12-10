import styled from "styled-components";
import { useState } from "react";

const DeckWrapper = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-family: helvetica;
  padding: 8px;
  background: none;
  border: none;
  text-align: left;
  &:hover {
    background-color: #bad5ee;
  }
`;

const ExpandedDeck = styled.div`
  font-weight: bold;
  min-height: 300px;
`;

const PreviewDeck = styled.button`
  background: none;
  font-size: 24px;
  line-height: 28px;
  font-family: helvetica;
  border: none;
  text-align: left;
  width: 100%;
  padding: 0px;
  &:hover {
    cursor: pointer;
  }
`;

const Deck = ({ deck }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <DeckWrapper onClick={() => setIsExpanded(!isExpanded)}>
      {isExpanded ? (
        <ExpandedDeck>{deck}</ExpandedDeck>
      ) : (
        <PreviewDeck>{deck}</PreviewDeck>
      )}
    </DeckWrapper>
  );
};
export default Deck;
