import { TODOS } from '../../constants';
import { actionCreator } from '../../utils';

export const addTodo = actionCreator(TODOS.ADD_TODO);
export const removeTodo = actionCreator(TODOS.REMOVE_TODO);
export const complatedTodo = actionCreator(TODOS.COMPLATED_TODO);
