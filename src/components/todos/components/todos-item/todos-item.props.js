import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../../store/actions';

export const useTodosItemProps = () => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return {
    handleRemoveTodo,
  };
};
