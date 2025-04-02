import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.8rem;
  margin-right: 16px;
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

const ToDoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default ToDoItem;
