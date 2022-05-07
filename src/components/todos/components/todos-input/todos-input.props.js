import { useDispatch } from 'react-redux';
import { addTodo } from '../../../../store/actions';

export const useTodosInputProps = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    console.log(e);
    dispatch(addTodo('salom'));
  };

  return {
    handleAddTodo,
  };
};
