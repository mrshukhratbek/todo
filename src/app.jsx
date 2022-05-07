import './app.css';
import { Header, Footer, Todo } from './components';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Todo />
      </main>
      <Footer />
    </>
  );
}

export default App;
