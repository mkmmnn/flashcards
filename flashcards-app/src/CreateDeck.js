import { useState } from "react";
import Card from "./Card";
import ScrollingCards from "./ScrollingCards";

const CreateDeck = ({ cards }) => {
  const [mode, setMode] = useState("create"); // 'create' || 'review'
  return (
    <>
      <Card>create</Card>
      <ScrollingCards cards={cards} setMode={setMode} />
    </>
  );
};

export default CreateDeck;
