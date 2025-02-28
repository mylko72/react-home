import { Outlet } from 'react-router-dom';
import LenisAPI from './api/LenisAPI';
import { useParallaxApiContext } from './context/ParallaxApiContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect, useRef } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const queryClient = new QueryClient()

function App() {
  const { scrollIndex } = useParallaxApiContext(); 
  const appRef = useRef(null);

  useEffect(() => {
    scrollIndex.init('.app__main-container', '.app__scroll-section', '[data-effect]', { threshold: 0.95 });
  });

  return (
    <>
      <Header />
      <div ref={appRef} className='app__main-container'>
        <LenisAPI />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </div>
      <Footer target={appRef} />
    </>
  );
}

export default App;
