import { useState, useEffect } from "react";
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

const Messages = () => {
  const [msgs, setMsgs] = useState([]);
  useEffect(() => {
    const getMsgData = async () => {
      const response = await api.getMessages();
      console.log(response);
      setMsgs(response);
    };
    getMsgData();
  }, []);
  return (
    <Wrapper>
      {msgs.map((msg) => {
        return (
          <MessageArea>
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
                  <Td>{msg.timestamp}</Td>
                </Tr>
              </Tbody>
            </Table>
            <DeleteBtn>Delete</DeleteBtn>
          </MessageArea>
        );
      })}
    </Wrapper>
  );
};

export default Messages;
