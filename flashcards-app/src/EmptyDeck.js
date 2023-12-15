import styled from "styled-components";

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
  flex-direction: column;
  font-family: helvetica;
  font-size: 32px;
`;

const EmptyDeck = () => {
  return (
    <LearnDeckWrapper>
      <Card>{`nothing to see :(`}</Card>
    </LearnDeckWrapper>
  );
};

export default EmptyDeck;
