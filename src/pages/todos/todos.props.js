import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const useTodosProps = () => {
  const { pathname } = useLocation();

  const todos = useSelector((state) => state.todos);

  const [filteredTodo, setFilteredTodo] = useState(todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setFilteredTodo(
      todos.filter((todo) => {
        if (pathname === '/active') {
          return todo.isCompleted === false;
        }

        if (pathname === '/completed') {
          return todo.isCompleted === true;
        }

        return todo;
      })
    );
  }, [pathname, todos]);

  return {
    todos: filteredTodo,
  };
};
