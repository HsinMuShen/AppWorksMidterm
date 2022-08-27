import { useState } from "react";
import styled from "styled-components";
import api from "../../utils/api";
import { storage } from "../../firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
  @media screen and (max-width: 992px) {
    width: 100%;
  }
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
  const [imageUpload, setImgUpload] = useState(null);

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
    if (imageUpload === null) {
      alert("請上傳照片");
      return;
    }

    const data = sendData;
    const imageRef = ref(
      storage,
      `images/${Math.floor(Date.now()) + imageUpload.name}`
    );
    const imageListRef = ref(storage, "images/");
    await uploadBytes(imageRef, imageUpload);
    const imgList = await listAll(imageListRef);
    const imgUrl = await getDownloadURL(
      imgList.items[imgList.items.length - 1]
    );
    data.imageUrl = imgUrl;

    data.timestamp = Math.floor(Date.now());
    console.log(data);

    const response = await api.addMessage(data);
    console.log(response);
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
      <ContactInputArea key="image">
        <ContactLabel>Image</ContactLabel>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImgUpload(e.target.files[0]);
          }}
        />
      </ContactInputArea>
      <ContactBtn onClick={sendMsg}>Send Message</ContactBtn>
    </Wrapper>
  );
};

export default Contact;
