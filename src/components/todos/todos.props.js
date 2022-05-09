import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useTodosProps = () => {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
  };
};
