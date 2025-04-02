import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly toDoList: Array<string>;
  readonly onDelete?: (todo: string) => void;
}

const ToDoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default ToDoList;
