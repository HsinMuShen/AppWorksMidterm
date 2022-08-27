import styled from "styled-components";
import Contact from "./Contact";

import bedroom from "./bedroom.svg";
import diningroom from "./diningroom.svg";
import livingroom from "./livingroom.svg";
import livingroom2 from "./livingroom2.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 64px 0 364px;
  @media screen and (max-width: 992px) {
    margin: 0 16px;
  }
`;

const TitleArea = styled.div`
  margin: 80px 0 0;
  @media screen and (max-width: 992px) {
    margin: 84px 0 0;
  }
`;
const Title = styled.p`
  color: #000000;
  font-weight: 700;
  font-size: 64px;
  line-height: 96px;
`;
const SubTitle = styled.p`
  color: #f44336;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  margin-bottom: 16px;
`;
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: calc((100% - 16px) / 2);
  margin-bottom: 16px;
  &:nth-child(odd) {
    margin-right: 16px;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    &:nth-child(odd) {
      margin-right: 0px;
    }
  }
`;

const ServiceArea = styled.div`
  margin-top: 55.78px;
`;
const ServiceTitle = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #f44336;
`;
const ServiceContent = styled.p`
  margin: 16px 0 72px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;

const HomeContent = () => {
  return (
    <Wrapper>
      <TitleArea>
        <Title>Interior Design</Title>
        <SubTitle>Showcase</SubTitle>
      </TitleArea>
      <Images>
        <Image src={bedroom} />
        <Image src={diningroom} />
        <Image src={livingroom} />
        <Image src={livingroom2} />
      </Images>
      <ServiceArea>
        <ServiceTitle>Services</ServiceTitle>
        <ServiceContent>
          We are a interior design service that focus on what's best for your
          home and what's best for you!
          <br /> <br />
          Some text about our services - what we do and what we offer. We are
          lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </ServiceContent>
      </ServiceArea>
      <Contact />
    </Wrapper>
  );
};

export default HomeContent;
