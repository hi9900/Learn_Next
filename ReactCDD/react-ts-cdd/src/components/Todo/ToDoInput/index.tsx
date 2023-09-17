import styled from '@emotion/styled';
import Title from '../Title';
import { useContext, useState } from 'react';
import TextInput from '../TextInput';
import Button from '../Button';
import { ToDoListContext } from 'contexts/ToDoList';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  readonly onClose: () => void;
}

export default function ToDoInput({ onClose }: Props) {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState('');

  const onAddTodo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
    onClose();
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label="추가" color="#304FFE" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}
