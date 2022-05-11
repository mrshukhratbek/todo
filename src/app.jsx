import './app.css';
import { MainLayout } from './components';
import { Todos } from './pages';

function App() {
  return (
    <MainLayout>
      <Todos />
    </MainLayout>
  );
}

export default App;
