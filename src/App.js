import { Outlet } from 'react-router-dom';
import LenisAPI from './api/LenisAPI';
import { useParallaxApiContext } from './context/ParallaxApiContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect, useRef } from 'react';

const queryClient = new QueryClient()

function App() {
  const { scrollIndex } = useParallaxApiContext(); 
  const appRef = useRef(null);

  useEffect(() => {
    scrollIndex.init('.app__main-container', '.app__scroll-section', '[data-effect]', { threshold: 0.95 });
  });

  return (
    <div ref={appRef} className='app__main-container'>
      <LenisAPI />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
