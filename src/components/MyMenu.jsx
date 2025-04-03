import React, { useRef } from 'react';
import { TfiClose } from "react-icons/tfi";

export default function MyMenu({ target, closeMenu, csName }) {
  const divRef = useRef(null);

  const onGoToTop = (e, index) => {
    e.preventDefault();
    if(index === undefined){
      target.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      target.current.querySelector(`#scroll-section-${index}`).scrollIntoView({ behavior: "smooth", block: "start" });
      if(index === 4){
        setTimeout(() => {
          window.scrollBy(0, 120);
        }, 1500)
      }
    }
    handleClick();
  }

  const handleClick = () => {
    closeMenu();
    divRef.current.classList.add('opacity-0');
    setTimeout(() => {
      divRef.current.classList.remove('opacity-0');
      [...divRef.current.querySelectorAll('.show-in')].forEach(el => {
        el.classList.remove('show-in');
      });
    }, 1000);
  }



  return (
    <div id="modal" className={'app__my-menu ' + csName} role="dialog" aria-labelledby='modalTitle' aria-hidden='true'>
      <div ref={divRef} className='relative h-screen'>
        <button id="closeModal" className='app__btn-top' aria-label="close" onClick={handleClick}><TfiClose  className='text-4xl lg:text-5xl 2xl:text-6xl' /></button>
        <div className='my-menu-inner flex justify-between'>
          <h2 id="modalTitle" className='app__main-tit text-3xl'>Portfolio</h2>
        </div>
        <div className='my-menu-con'>
          <div className='flex flex-col justify-center items-center'>
            <ul className='flex flex-col items-center gap-y-10 md:gap-y-16'>
              <li className='app__mask' data-effect><button className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-white' data-effect="slide-up" data-delay=".3s" onClick={(e) => onGoToTop(e, 1)}>My Work</button></li>
              <li className='app__mask' data-effect><button className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-white' data-effect="slide-up" data-delay=".5s" onClick={(e) => onGoToTop(e, 2)}>My Skill</button></li>
              <li className='app__mask' data-effect><button className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-white' data-effect="slide-up" data-delay=".7s" onClick={(e) => onGoToTop(e, 3)}>About Me</button></li>
              <li className='app__mask' data-effect><button className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-white' data-effect="slide-up" data-delay=".9s" onClick={(e) => onGoToTop(e, 4)}>My Favorite</button></li>
            </ul>  
          </div>
        </div>

      </div>
    </div>
  );
}

