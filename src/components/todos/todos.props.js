import { useSelector } from 'react-redux';

export const useTodosProps = () => {
  const todos = useSelector((state) => state.todos);

  return {
    todos,
  };
};
