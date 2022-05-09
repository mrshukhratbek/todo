import { TODOS } from '../../constants';

const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODOS.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
