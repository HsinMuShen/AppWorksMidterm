import Header from "./Header";
import HomeContent from "./HomeContent";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* flex-direction: column; */
`;

const Homepage = () => {
  return (
    <Wrapper>
      <Header></Header>
      <HomeContent></HomeContent>
    </Wrapper>
  );
};

export default Homepage;
