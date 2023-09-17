import styled from '@emotion/styled';
import DataView from 'components/Todo/DataView';
import InputContainer from 'components/Todo/InputContainer';
import { ToDoListContextProvider } from 'contexts/ToDoList';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

export default function Todo() {
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer />
      </ToDoListContextProvider>
    </Container>
  );
}
