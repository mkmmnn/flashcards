import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "./Card";

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
    background-color: var(--blue);
  }
  &:hover {
    background-color: var(--blue);
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
    background-color: var(--blue);
    cursor: pointer;
  }
  &:hover {
    background-color: var(--blue);
    cursor: pointer;
  }
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
    background-color: var(--red);
    cursor: pointer;
  }
`;

const LearnDeck = ({ cards }) => {
  const [status, setStatus] = useState("guess"); // 'guess' | 'success' | 'failure' | 'complete'
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
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
      setSuccessCount(successCount + 1);
    } else {
      setStatus("failure");
      setFailCount(failCount + 1);
    }
  };

  const handleRefresh = () => {
    setCurrentGuess("");
    setRemainingCards(cards);
    setCompletedCards([]);
    setCurrentCard(cards[cards.length - 1]);
    setStatus("guess");
  };

  const handleDismissFailure = () => {
    setCurrentGuess("");
    if (remainingCards.length === 0) {
      setStatus("complete");
      setCurrentCard([]);
    } else {
      setStatus("guess");
      setCurrentCard(remainingCards[remainingCards.length - 1]);
    }
  };

  // set timeout on success
  useEffect(() => {
    if (status === "success") {
      const intervalId = window.setInterval(() => {
        setCurrentGuess("");
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
    <>
      {status === "guess" ? (
        <>
          <Card>{currentCard[0]}</Card>
          <GuessForm onSubmit={handleGuess}>
            <GuessInput
              autoFocus
              placeholder={"guess"}
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
            ></GuessInput>
            <SubmitGuessButton type="submit">submit</SubmitGuessButton>
          </GuessForm>
        </>
      ) : status === "success" ? (
        <>
          <Card color={`var(--green)`}>good job!</Card>
        </>
      ) : status === "failure" ? (
        <Card
          tagType={"button"}
          color={`var(--red)`}
          autoFocus
          onClick={handleDismissFailure}
        >
          <div style={{ textAlign: "center" }}>{currentCard[0]}</div>
          <div style={{ textDecoration: "line-through", textAlign: "center" }}>
            {currentGuess}
          </div>
          <div style={{ textAlign: "center" }}>{currentCard[1]}</div>
        </Card>
      ) : (
        <>
          <Card color={"var(--blue)"}>done!</Card>
          <Refresh autoFocus onClick={handleRefresh}>
            refresh
          </Refresh>
        </>
      )}
    </>
  );
};

export default LearnDeck;
