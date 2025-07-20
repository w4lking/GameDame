// 1. Importe o Outlet aqui
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;