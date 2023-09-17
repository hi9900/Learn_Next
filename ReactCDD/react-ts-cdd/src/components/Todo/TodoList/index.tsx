import styled from '@emotion/styled';
import TodoItem from '../TodoItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

export default function TodoList({ toDoList, onDelete }: Props) {
  return (
    <Container>
      {toDoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
}
