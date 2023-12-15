import styled from "styled-components";

const ToggleWrapper = styled.div`
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

const DeckModeToggle = ({ mode, setMode }) => {
  return (
    <ToggleWrapper>
      <ToggleOption
        onClick={() => setMode("learn")}
        style={mode === "learn" ? { backgroundColor: "var(--yellow)" } : {}}
      >
        learn
      </ToggleOption>

      <ToggleOption
        onClick={() => setMode("create")}
        style={mode === "create" ? { backgroundColor: "var(--green)" } : {}}
      >
        create
      </ToggleOption>
    </ToggleWrapper>
  );
};

export default DeckModeToggle;
