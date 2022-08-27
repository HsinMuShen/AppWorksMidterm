import styled from "styled-components";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
`;
const Option = styled(Link)`
  text-decoration: none;
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
        <Option to={"#"}>Home</Option>
        <Option to={"#"}>Showcase</Option>
        <Option to={"#"}>Services</Option>
        <Option to={"#"}>Contact</Option>
        <Option to={"/messages"}>Messages</Option>
      </Options>
    </Wrapper>
  );
};

export default Header;
