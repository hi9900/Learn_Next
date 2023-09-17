import ToDoInput from '../ToDoInput';
import ShowInputButton from '../ShowInputButton';
import { useState } from 'react';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

export default function InputContainer({ onAdd }: Props) {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAddToDo = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(false);
  };
  return (
    <>
      {showToDoInput && <ToDoInput onAdd={onAddToDo} />}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
}
