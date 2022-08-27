import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  min-width: 300px;
  height: 100vh;
  background: #f44336;
  padding: 0 48px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  margin: 94px 0 0;
`;

const Options = styled.div`
  margin-top: 94px;
`;
const Option = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin: 0 0 24px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>DesignWorks</Title>
      <Options>
        <Option>Home</Option>
        <Option>Showcase</Option>
        <Option>Services</Option>
        <Option>Contact</Option>
      </Options>
    </Wrapper>
  );
};

export default Header;
