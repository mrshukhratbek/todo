import { TODOS } from '../../constants';

const actionCreator = (type) => (payload) => ({ type, payload })

const createSlice = ({ name, initialState, reducers }) => {

  const actions = Object.keys(reducers).reduce((acc, key) => {
    acc[key] = actionCreator(`${name}/${key}`)
    return acc
  }, {})

  const reducer = (state, action) => {
    const actionReducer = reducers[`${name}/${action.type}`]

    if (actionReducer && typeof actionReducer === 'function') {
      const $state = Object.assign({}, state)
      const result = actionReducer($state, action)

      return result || $state
    } else {
      return state
    }
  }

  return { actions, reducer }
}

export const addTodo = actionCreator(TODOS.ADD_TODO)
export const removeTodo = actionCreator(TODOS.REMOVE_TODO)

export const complatedTodo = (todo) => {
  return {
    type: TODOS.COMPLATED_TODO,
    payload: todo,
  };
};
