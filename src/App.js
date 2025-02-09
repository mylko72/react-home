import { Outlet } from 'react-router-dom';
import LenisAPI from './api/Lenis';

function App() {
  return (
    <>
      <LenisAPI />
      <Outlet />
    </>
  );
}

export default App;
