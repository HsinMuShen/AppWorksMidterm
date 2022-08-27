import { useState } from "react";
import styled from "styled-components";
import api from "../../utils/api";

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
  height: 40px;
  background: #ffffff;
  border: 1px solid #cccccc;
  width: calc((100% - 104px));
  padding-left: 10px;
`;
const ContactBtn = styled.button`
  width: 100%;
  height: 48px;
  background: #f44336;
  border: 0px;
  color: #ffffff;
  cursor: pointer;
`;

const inputInfo = [
  { label: "Name", name: "name" },
  { label: "Email", name: "email" },
  { label: "Message", name: "message" },
];

const Contact = () => {
  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendMsg = async () => {
    // setSendData((prev) => ({
    //   ...prev,
    //   timestamp: Math.floor(Date.now()),
    // }));
    for (let key in sendData) {
      if (sendData[key] === "") {
        alert("請完整填寫表單");
        return;
      }
    }
    const data = sendData;
    data.timestamp = Math.floor(Date.now());

    const response = await api.addMessage(data);

    if (response) {
      alert("成功新增留言!");
    }
  };

  return (
    <Wrapper>
      <ContactTitle>Contact</ContactTitle>
      {inputInfo.map(({ label, name }) => {
        return (
          <ContactInputArea key={label}>
            <ContactLabel>{label}</ContactLabel>
            <ContactInput
              type="text"
              onChange={(e) => {
                setSendData({
                  ...sendData,
                  [name]: e.target.value,
                });
              }}
            />
          </ContactInputArea>
        );
      })}
      <ContactBtn onClick={sendMsg}>Send Message</ContactBtn>
    </Wrapper>
  );
};

export default Contact;
