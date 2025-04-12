import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 32px;
  background: var(--light-color);
  z-index: 1;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.4rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 4px;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

interface Props {
  readonly onClose: () => void;
}

const Form = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const url = "https://jsonplaceholder.typicode.com/posts";

  const registerPost = () => {
    if (title === "" || body === "") return;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId: 1,
        title,
        body,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (typeof onClose === "function") onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title>블로그등록</Title>
        <InputGroup>
          <Label>Title : </Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Body : </Label>
          <Input value={body} onChange={(e) => setBody(e.target.value)} />
        </InputGroup>
        <Actions>
          <Button label="등록하기" onClick={registerPost} />
          <Button label="닫기" color="#304ffe" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  );
};

export default Form;
