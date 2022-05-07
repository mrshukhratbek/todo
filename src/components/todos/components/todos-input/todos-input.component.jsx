import { hoc } from '../../../../utils';
import { useTodosInputProps } from './todos-input.props';

export const TodosInput = hoc(useTodosInputProps, ({ handleAddTodo }) => {
  return (
    <div className="row offset-md-3 offset-lg-4">
      <div className="col-md-8 col-lg-6 p-0">
        <input
          className="form-control rounded-0"
          type="text"
          placeholder="What needs to be done?"
          autoFocus={true}
          onKeyUp={handleAddTodo}
          required
        />
      </div>
    </div>
  );
});
