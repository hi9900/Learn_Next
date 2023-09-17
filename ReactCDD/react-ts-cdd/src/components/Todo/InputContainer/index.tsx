import ToDoInput from '../ToDoInput';
import ShowInputButton from '../ShowInputButton';
import { useState } from 'react';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

export default function InputContainer() {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    setShowToDoInput(false);
  };
  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
}
