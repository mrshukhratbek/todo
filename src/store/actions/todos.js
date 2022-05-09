import { TODOS } from '../../constants';

export const addTodo = (todo) => {
  return {
    type: TODOS.ADD_TODO,
    payload: todo,
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

export const complatedTodo = (todo) => {
  return {
    type: TODOS.COMPLATED_TODO,
    payload: todo,
  };
};
