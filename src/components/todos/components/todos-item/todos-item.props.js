import { useDispatch } from 'react-redux';
import { removeTodo, complatedTodo } from '../../../../store/actions';

export const useTodosItemProps = () => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleComplatedTodo = (evt) => {
    dispatch(
      complatedTodo({
        id: evt.target.dataset.id,
        isComplated: evt.target.checked,
      })
    );
  };

  return {
    handleRemoveTodo,
    handleComplatedTodo,
  };
};
