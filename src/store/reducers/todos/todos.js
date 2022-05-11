import { TODOS } from '../../../constants';

const localTodos = JSON.parse(localStorage.getItem('todos'));
const initialState = localTodos ? localTodos : [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return [...state, action.payload];
    case TODOS.REMOVE_TODO:
      return state.filter((state) => state.id !== action.payload.id);
    case TODOS.COMPLATED_TODO:
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.isComplated = action.payload.isComplated;
        }
      });

      return [...state];
    default:
      return state;
  }
};
