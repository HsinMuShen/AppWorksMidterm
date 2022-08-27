import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hamburger from "./hamburger.png";
import close from "./close.png";

const Wrapper = styled.div``;

const FadeScreen = styled.div`
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const MobileHeader = styled.div`
  display: none;

  @media screen and (max-width: 992px) {
    display: flex;
    position: fixed;
    background: #f44336;
    width: 100vw;
    height: 68px;
    align-items: flex-start;
  }
`;

const HamIcon = styled.img`
  height: 15.3125px;
  width: 17px;
  margin: 26px 0 0 32px;
  cursor: pointer;
`;

const MobileTitle = styled.p`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    margin: 18px 0 0 32px;
  }
`;

const NavList = styled.div`
  position: fixed;
  min-width: 300px;
  height: 100vh;
  background: #f44336;
  padding: 0 48px;
  @media screen and (max-width: 992px) {
    left: -300px;
  }
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

const CloseIcon = styled.img`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 27.12px;
    left: 254px;
    cursor: pointer;
  }
`;
console.log(window.innerWidth <= 992);
const Header = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <Wrapper>
      <MobileHeader>
        <HamIcon
          src={hamburger}
          onClick={() => {
            setIsSideBar(true);
          }}
        />
        <MobileTitle>DesignWorks</MobileTitle>
      </MobileHeader>
      <FadeScreen
        style={{ display: isSideBar ? "block" : "none" }}
      ></FadeScreen>
      <NavList
        style={{
          left: window.innerWidth > 992 ? "0" : isSideBar ? 0 : "-300px",
        }}
      >
        <CloseIcon
          src={close}
          onClick={() => {
            setIsSideBar(false);
          }}
        />
        <Title>DesignWorks</Title>
        <Options>
          <Option to={"#"}>Home</Option>
          <Option to={"#"}>Showcase</Option>
          <Option to={"#"}>Services</Option>
          <Option to={"#"}>Contact</Option>
          <Option to={"/messages"}>Messages</Option>
        </Options>
      </NavList>
    </Wrapper>
  );
};

export default Header;
