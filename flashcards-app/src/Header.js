import styled from "styled-components";

const Heading = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 38px;
  font-family: helvetica;
  overflow-wrap: anywhere;
  padding: 8px;
  &:hover {
    background-color: #ff4601;
  }
`;

const Header = () => {
  return <Heading>flashcards</Heading>;
};

export default Header;
