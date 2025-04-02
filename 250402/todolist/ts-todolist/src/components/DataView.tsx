import styled from "styled-components";
import Title from "./Title";
import ToDoList from "./ToDoList";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-color);
  padding: 32px 48px;
  border-radius: 8px;
`;

interface Props {
  readonly toDoList: Array<string>;
  readonly onDelete?: (todo: string) => void;
}

const DataView = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
