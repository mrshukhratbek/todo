import { TODOS } from '../../constants';

const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return [...state, action.payload];
    case TODOS.REMOVE_TODO:
      return state.filter((state) => state.id !== action.payload.id);
    default:
      return state;
  }
};
