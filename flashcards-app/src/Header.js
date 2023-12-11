import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 8px;
  &:hover {
    background-color: #ff4000;
  }
`;
const Heading = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 38px;
  font-family: helvetica;
  overflow-wrap: anywhere;
  padding: 0px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>flashcards</Heading>
      <p style={{ fontFamily: "Helvetica", margin: "0" }}>by molly</p>
    </HeaderWrapper>
  );
};

export default Header;
