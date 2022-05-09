import { TODOS } from '../../constants';

export const addTodo = (todo) => {
  return {
    type: TODOS.ADD_TODO,
    payload: {
      ...todo,
    },
  };
};
