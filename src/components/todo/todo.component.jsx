import { TodoInput, TodoItem, TodoActions } from './components';

export const Todo = () => {
  return (
    <div className="container-sm p-4 p-md-0 pt-md-5">
      <TodoInput />
      <div className="row offset-md-3 offset-lg-4 mt-2">
        <ul className="col-md-8 col-lg-6 list-unstyled shadow-sm border p-0">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoActions />
        </ul>
      </div>
    </div>
  );
};
