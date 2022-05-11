import { NavLink } from 'react-router-dom';

export const TodosActions = ({ count }) => {
  return (
    <li className="px-3 py-2 d-flex justify-content-between align-items-center">
      <p className="m-0">{count} items</p>
      <div>
        <NavLink
          className="btn btn-outline-info p-1"
          style={{ lineHeight: 1 }}
          to="/"
        >
          All
        </NavLink>
        <NavLink
          className="btn btn-outline-info p-1 mx-2"
          style={{ lineHeight: 1 }}
          to="/active"
        >
          Active
        </NavLink>
        <NavLink
          className="btn btn-outline-info p-1"
          style={{ lineHeight: 1 }}
          to="/complated"
        >
          Completed
        </NavLink>
      </div>
    </li>
  );
};
