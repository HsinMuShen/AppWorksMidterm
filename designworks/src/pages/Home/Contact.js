import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 72px;
`;
const ContactTitle = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #f44336;
  margin-bottom: 16px;
`;
const ContactInputArea = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;
const ContactLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  width: 104px;
`;
const ContactInput = styled.input`
  width: 748px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  width: calc((100% - 104px));
  padding-left: 10px;
`;
const ContactBtn = styled.button`
  min-width: 100%;
  width: 852px;
  height: 48px;
  background: #f44336;
  border: 0px;
  color: #ffffff;
  cursor: pointer;
`;

const inputInfo = [{ label: "Name" }, { label: "Email" }, { label: "Message" }];

const Contact = () => {
  return (
    <Wrapper>
      <ContactTitle>Contact</ContactTitle>
      {inputInfo.map(({ label }) => {
        return (
          <ContactInputArea key={label}>
            <ContactLabel>{label}</ContactLabel>
            <ContactInput />
          </ContactInputArea>
        );
      })}
      <ContactBtn>Send Message</ContactBtn>
    </Wrapper>
  );
};

export default Contact;
