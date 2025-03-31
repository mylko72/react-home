import { Outlet } from 'react-router-dom';
import LenisAPI from './api/LenisAPI';
import { useParallaxApiContext } from './context/ParallaxApiContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MyMenu from './components/MyMenu';

const queryClient = new QueryClient()

function App() {
  const { scrollIndex } = useParallaxApiContext();
  const [active, setActive] = useState(null);
  const [focusedElement, setFocusedElement] = useState(null);
  const appRef = useRef(null);

  const openMenu = () => {
    setActive('active');
    setFocusedElement(document.activeElement);
  }

  const closeMenu = () => {
    setActive(null);
    focusedElement.focus();
  }

  useEffect(() => {
    scrollIndex.init('.app__main-container', '.app__scroll-section', '[data-effect]', { threshold: 0.95 });
  });

  return (
    <>
      <Header openMenu={() => openMenu()} />
      <MyMenu target={appRef} closeMenu={() => closeMenu()} csName={active} />
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
