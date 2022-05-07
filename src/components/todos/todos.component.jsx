import { useSelector } from 'react-redux';
import { TodosInput, TodosItem, TodosActions } from './components';

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div className="container-sm p-4 p-md-0 pt-md-5">
      <TodosInput />
      <div className="row offset-md-3 offset-lg-4 mt-2">
        <ul className="col-md-8 col-lg-6 list-unstyled shadow-sm border p-0">
          <TodosItem />
          <TodosItem />
          <TodosItem />
          <TodosActions />
        </ul>
      </div>
    </div>
  );
};
