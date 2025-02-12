import { Outlet } from 'react-router-dom';
import LenisAPI from './api/LenisAPI';
import { useParallaxApiContext } from './context/ParallaxApiContext';
import { useEffect, useRef } from 'react';

function App() {
  const { scrollIndex } = useParallaxApiContext(); 
  const appRef = useRef(null);

  useEffect(() => {
    scrollIndex.init('.app__main-container', '.app__scroll-section', '[data-effect]', { threshold: 0.95 });
    console.log('scrollIndex', scrollIndex);
  });

  return (
    <div ref={appRef} className='app__main-container'>
      <LenisAPI />
      <Outlet />
    </div>
  );
}

export default App;
