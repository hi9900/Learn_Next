import styled from '@emotion/styled';
import DataView from 'components/Todo/DataView';
import InputContainer from 'components/Todo/InputContainer';
import { useState } from 'react';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

export default function Todo() {
  const [toDoList, setToDoList] = useState(['리액트', '넥스트', '프로젝트']);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <InputContainer onAdd={onAdd} />
    </Container>
  );
}
