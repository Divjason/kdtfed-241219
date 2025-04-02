import styled from "styled-components";

const Input = styled.input`
  font-size: 1.4rem;
  padding: 8px;
`;

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return (
    <Input value={value} onChange={(event) => onChange(event.target.value)} />
  );
};

export default TextInput;
