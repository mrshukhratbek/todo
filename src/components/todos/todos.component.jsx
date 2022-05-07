import { TodosInput, TodosItem, TodosActions } from './components';
import { useTodosProps } from './todos.props';
import { hoc } from '../../utils';

export const Todos = hoc(useTodosProps, ({ todos }) => {
  return (
    <div className="container-sm p-4 p-md-0 pt-md-5">
      <TodosInput />
      <div className="row offset-md-3 offset-lg-4 mt-2">
        {todos.length > 0 && (
          <ul className="col-md-8 col-lg-6 list-unstyled shadow-sm border p-0">
            {todos.map((todo) => (
              <TodosItem key={todo.id} todo={todo} />
            ))}
            <TodosActions />
          </ul>
        )}
      </div>
    </div>
  );
});
