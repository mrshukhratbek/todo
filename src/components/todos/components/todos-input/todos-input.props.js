import { useDispatch } from 'react-redux';
import { addTodo } from '../../../../store/actions';
import { v4 as uuidv4 } from 'uuid';

export const useTodosInputProps = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    if (e.keyCode === 13) {
      const newTodo = {
        id: uuidv4(),
        title: e.target.value,
        isComplated: false,
      };

      dispatch(addTodo(newTodo));
      e.target.value = null;
    }
  };

  return {
    handleAddTodo,
  };
};
