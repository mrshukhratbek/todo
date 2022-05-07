import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="text-decoration-none h4 mb-0" to="/">
          Todos app
        </Link>
        <a className="text-decoration-none h5 mb-0" href="https://github.com">
          Repo
        </a>
      </div>
    </header>
  );
};
