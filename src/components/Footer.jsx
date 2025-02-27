import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidToTop } from "react-icons/bi";

export default function Footer({ target }) {
  const onHandleTop = (e, index) => {
    e.preventDefault();
    if(index === undefined){
      target.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      target.current.querySelector(`#scroll-section-${index}`).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className='footer-inner'>
      <div className='footer-etc flex justify-between'>
        <h1 className='app__main-tit text-3xl'>Portfolio</h1>
        <Link to="#" className='flex items-center app__btn-top text-base' onClick={(e) => onHandleTop(e)}>Go To Top <BiSolidToTop className='ml-4 text-lg' /></Link>
      </div>
      <div className='footer-con'>
        <div className='flex justify-center'>
          <ul className='flex flex-col gap-y-16'>
            <li><Link to="#" className='2xl:text-8xl text-slate-500 hover:text-white' onClick={(e) => onHandleTop(e, 1)}>My Work</Link></li>
            <li><Link to="#" className='2xl:text-8xl text-slate-500 hover:text-white' onClick={(e) => onHandleTop(e, 2)}>My Skill</Link></li>
            <li><Link to="#" className='2xl:text-8xl text-slate-500 hover:text-white' onClick={(e) => onHandleTop(e, 3)}>About Me</Link></li>
          </ul>  
        </div>
      </div>
    </div>
  );
}

