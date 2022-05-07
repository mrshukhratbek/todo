export const TodoItem = () => {
  return (
    <li className="px-3 py-2 d-flex justify-content-between border-bottom align-items-center">
      <div className="form-check m-0">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <p className="form-check-label m-0">Default checkbox</p>
      </div>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </li>
  );
};
