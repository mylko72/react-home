import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidToTop } from "react-icons/bi";

export default function Footer({ target }) {
  const onGoToTop = (e, index) => {
    e.preventDefault();
    if(index === undefined){
      target.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      target.current.querySelector(`#scroll-section-${index}`).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <footer className='app__main-footer'>
      <div className='footer-inner'>
        <div className='footer-etc flex justify-between'>
          <h1 className='app__main-tit text-3xl'>Portfolio</h1>
          <Link to="#" className='flex items-center app__btn-top text-base' onClick={(e) => onGoToTop(e)}>Go To Top <BiSolidToTop className='ml-4 text-lg' /></Link>
        </div>
        <div className='footer-con'>
          <div className='flex flex-col justify-center items-center'>
            <ul className='flex flex-col items-center gap-y-10 md:gap-y-16'>
              <li><Link to="#" className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-slate-500 hover:text-white' onClick={(e) => onGoToTop(e, 1)}>My Work</Link></li>
              <li><Link to="#" className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-slate-500 hover:text-white' onClick={(e) => onGoToTop(e, 2)}>My Skill</Link></li>
              <li><Link to="#" className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-slate-500 hover:text-white' onClick={(e) => onGoToTop(e, 3)}>About Me</Link></li>
              <li><Link to="#" className='text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-slate-500 hover:text-white' onClick={(e) => onGoToTop(e, 4)}>My Favorite</Link></li>
            </ul>  
            <p className='text-lg text-slate-700 mt-10 xl:mt-16 2xl:mt-20'>This site was implemented with React, tailwindcss, and parallax animation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

