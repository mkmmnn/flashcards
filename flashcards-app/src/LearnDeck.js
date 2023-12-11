import styled from "styled-components";
import { useState, useEffect } from "react";

const LearnDeckWrapper = styled.div`
  min-height: 224px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100%;
  flex-grow: 1;
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
  padding: 0 8px;
  &:focus {
    background-color: #bad5ee;
    cursor: pointer;
  }
  &:hover {
    background-color: #bad5ee;
    cursor: pointer;
  }
`;

const SuccessCard = styled(Card)`
  height: 221px;
  background-color: #a6b536;
`;

const FailureCard = styled(Card)`
  height: 221px;
  background-color: #ff4000;
`;

const CompleteCard = styled(Card)`
  background-color: #bad5ee;
`;

const Refresh = styled.button`
  background: none;
  border: none;
  border-top: 3px solid black;
  width: 100%;
  display: flex;
  height: 30px;
  font-family: helvetica;
  font-size: 20px;
  display: flex;
  flex-direction: row-reverse;
  &:hover {
    background-color: #ff4000;
    cursor: pointer;
  }
`;

const LearnDeck = ({ cards }) => {
  const [status, setStatus] = useState("guess"); // 'guess' | 'success' | 'failure' | 'complete'
  const [remainingCards, setRemainingCards] = useState(cards);
  const [completedCards, setCompletedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(cards[cards.length - 1]); // tuple [front, back]
  const [currentGuess, setCurrentGuess] = useState("");
  const handleGuess = (event) => {
    event.preventDefault();
    const nextCompletedCards = [...completedCards];
    const nextRemainingCards = [...remainingCards];
    nextCompletedCards.push(nextRemainingCards.pop());
    setCompletedCards(nextCompletedCards);
    setRemainingCards(nextRemainingCards);
    if (currentGuess === currentCard[1]) {
      setStatus("success");
    } else {
      setStatus("failure");
    }
    setCurrentGuess("");
  };

  const handleRefresh = () => {
    setRemainingCards(cards);
    setCompletedCards([]);
    setCurrentCard(cards[cards.length - 1]);
    setStatus("guess");
  };

  useEffect(() => {
    if (status !== "guess") {
      const intervalId = window.setInterval(() => {
        if (remainingCards.length === 0) {
          setStatus("complete");
          setCurrentCard("");
        } else {
          setStatus("guess");
          setCurrentCard(remainingCards[remainingCards.length - 1]);
        }
      }, 500);
      return () => {
        window.clearInterval(intervalId);
      };
    }
  }, [status, remainingCards]);

  return (
    <LearnDeckWrapper>
      {status === "guess" ? (
        <>
          <Card>{currentCard[0]}</Card>
          <GuessForm onSubmit={handleGuess}>
            <GuessInput
              placeholder={"guess"}
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
            ></GuessInput>
            <SubmitGuessButton type="submit">submit</SubmitGuessButton>
          </GuessForm>
        </>
      ) : status === "success" ? (
        <>
          <SuccessCard>good job!</SuccessCard>
        </>
      ) : status === "failure" ? (
        <>
          <FailureCard>oops!</FailureCard>
        </>
      ) : (
        <>
          <CompleteCard>done!</CompleteCard>
          <Refresh onClick={handleRefresh}>refresh</Refresh>
        </>
      )}
    </LearnDeckWrapper>
  );
};

export default LearnDeck;
