import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../utils/api";

const Wrapper = styled.div`
  margin: 40px;
`;
const MessageArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Table = styled.table`
  border: 1px solid;
  margin-right: 20px;
`;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td``;

const DeleteBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: #ffffff;
  cursor: pointer;
`;

const HomeBtn = styled(Link)`
  width: 100px;
  height: 40px;
  text-decoration: none;
  color: #000000;
  padding: 5px;
  border: 1px solid;
`;

const Messages = () => {
  const [msgs, setMsgs] = useState([]);

  const convertDate = (unitTime) => {
    var date = new Date(unitTime);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  };

  const getMsgData = async () => {
    const response = await api.getMessages();
    setMsgs(response);
  };

  const deleteMessage = async (id) => {
    api.deleteMessage(id).then(() => getMsgData());
  };

  useEffect(() => {
    getMsgData();
  }, []);
  return (
    <Wrapper>
      {msgs.map((msg) => {
        return (
          <MessageArea key={msg.timestamp}>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Name:</Td>
                  <Td>{msg.name}</Td>
                </Tr>
                <Tr>
                  <Td>Email:</Td>
                  <Td>{msg.email}</Td>
                </Tr>
                <Tr>
                  <Td>Message:</Td>
                  <Td>{msg.message}</Td>
                </Tr>
                <Tr>
                  <Td>Timestamp:</Td>
                  <Td>{convertDate(msg.timestamp)}</Td>
                </Tr>
              </Tbody>
            </Table>
            <DeleteBtn
              onClick={() => {
                deleteMessage(msg.id);
              }}
            >
              Delete
            </DeleteBtn>
          </MessageArea>
        );
      })}
      <HomeBtn to={"/"}>Home</HomeBtn>
    </Wrapper>
  );
};

export default Messages;
