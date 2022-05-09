import { TODOS } from '../../constants';

export const addTodo = (todo) => {
  return {
    type: TODOS.ADD_TODO,
    payload: {
      ...todo,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: TODOS.REMOVE_TODO,
    payload: {
      id,
    },
  };
};
