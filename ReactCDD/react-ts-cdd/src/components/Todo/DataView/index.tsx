import styled from '@emotion/styled';
import Title from '../Title';
import TodoList from '../TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;
interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

export default function DataView({ toDoList, onDelete }: Props) {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
}
