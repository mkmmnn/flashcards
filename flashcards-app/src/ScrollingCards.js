import styled, { keyframes } from "styled-components";
import { useState, Fragment } from "react";

const ScrollingCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 3px solid black;
  max-width: 100%;
  line-height: 30px;
  height: 33px;
  font-size: 20px;
`;
const ScrollingCardsWrapper = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  width: 100%;
  overflow: hidden;
`;

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const MarqueeContainer = styled.div`
  height: 30px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const MarqueeContent = styled.div`
  height: 30px;
  display: block;
  white-space: nowrap;
  width: fit-content;
  text-align: right;
  position: absolute;
  transform: translateX(50%);
  overflow: hidden;
  white-space: pre;
  line-height: 30px;
  font-size: 20px;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${marquee} ${(props) => props.speed}s linear infinite;
  }
`;

const PlayPause = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  border-left: 3px solid black;
  width: 33px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ScrollingCards = ({ setMode, cards }) => {
  const [isPlayingAnimation, setIsPlayingAnimation] = useState(true);

  const scrollText =
    cards.map((card) => card.join(" - ")).join("      ") + "      ";

  // 60 char to fill the widest screen
  const countTextNeeded = Math.max(Math.ceil(120 / scrollText.length), 2);
  const repeatedText = new Array(countTextNeeded)
    .fill(0)
    .map((_, index) => <Fragment key={index}>{scrollText}</Fragment>);
  return (
    <ScrollingCardsContainer>
      <ScrollingCardsWrapper onClick={() => setMode("review")}>
        <MarqueeContainer>
          <MarqueeContent
            style={{
              animationPlayState: isPlayingAnimation ? "running" : "paused",
            }}
            speed={Math.max(scrollText.length / 4.0, 10)}
          >
            {repeatedText}
          </MarqueeContent>
        </MarqueeContainer>
      </ScrollingCardsWrapper>
      <PlayPause onClick={() => setIsPlayingAnimation(!isPlayingAnimation)}>
        {isPlayingAnimation ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </PlayPause>
    </ScrollingCardsContainer>
  );
};

export default ScrollingCards;
