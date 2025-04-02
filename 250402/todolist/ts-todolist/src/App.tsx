import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const mockData = ["React 공부하기", "운동하기", "책읽기"];

function App() {
  const [toDoList, setToDoList] = useState(mockData);

  const [toDo, setToDo] = useState("");

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  return (
    <>
      <GlobalStyles />
      <Container>
        <DataView toDoList={toDoList} onDelete={onDelete} />
        <TextInput value={toDo} onChange={setToDo} />
        <Button label="추가" color="#304ffe" />
      </Container>
    </>
  );
}

export default App;
