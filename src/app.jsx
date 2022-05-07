import './app.css';
import { Header, Footer, Todos } from './components';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Todos />
      </main>
      <Footer />
    </>
  );
}

export default App;
