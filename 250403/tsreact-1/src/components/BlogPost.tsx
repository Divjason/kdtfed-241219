import styled from "styled-components";

const Container = styled.div`
  background: var(--light-color);
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #d9d9d9;
  max-width: 800px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

const BlogPost = ({ title, body }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

export default BlogPost;
