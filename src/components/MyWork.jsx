import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParallaxApiContext } from '../context/ParallaxApiContext';
import ScreenSize from '../api/ScreenSize';
import SwiperLists from "./SwiperLists";
import WorkLists from './WorkLists';
import { useEffect, useState } from 'react';

export default function MyWork() {
  const _SIZE = 12;
  const [hover, setHover] = useState(false);
  const [device, setDevice] = useState('Desktop');
  const [slideNum, setSlideNum] = useState(2);
  const { scrollIndex } = useParallaxApiContext();
  const {isLoading, isSuccess, error, data: works} = useQuery({
    queryKey: ['works', _SIZE],
    queryFn: async () => {
      console.log('fetching....');
      return axios.get('/data/works.json').then(res => res.data.works)
    },
  });

  const screenWidth = ScreenSize().width;
  if(device === 'Desktop' && screenWidth <= 768) {
    setDevice('Mobile');
    setSlideNum(12);
    document.documentElement.classList.remove('app__desktop');
    document.documentElement.classList.add('app__mobile');
  } 
  if(device === 'Mobile' && screenWidth > 768) {
    setDevice('Desktop');
    setSlideNum(2);
    document.documentElement.classList.remove('app__mobile');
    document.documentElement.classList.add('app__desktop');
  } 

  if(isSuccess){
    console.log('success...');
    console.log('screenWidth', screenWidth);
  }


  useEffect(() => {
    scrollIndex.setObserver();
    scrollIndex.scrollMotion.setDataSet(); 
    scrollIndex.scrollMotion.setObserver();
  });

  return (
    <section id="scroll-section-1" className='app__scroll-section flex flex-col items-center 2xl:flex-row 2xl:justify-between 2xl:items-start' aria-label="프로젝트 작업물">
      <div>
        <svg className="line-curved">
          <linearGradient id="grad-red" x1="0" y1="100" x2="100%" y2="100">
            <stop offset="0%" style={{stopColor: '#FF4E50'}} />
            <stop offset="100%" style={{stopColor: '#F9D423'}} />  
          </linearGradient>
        </svg>
      </div>

      <div>
        <svg className="line-curved" preserveAspectRatio="none" width="50" height="30" viewBox="0 0 500 300" version="1.1">
          <path className="path" fill="url(#grad-red)" d="M0,105c166-66,333,38,500-20c0-2,0-5,0-7C333,128,166,12,0,64 C0,77,0,91,0,105z"></path>
        </svg>
      </div>      

      <div className="app__main-message flex flex-col md:flex-row 2xl:flex-col items-center gap-3 mb-5 2xl:justify-end 2xl:items-end 2xl:ml-10">
        <div className="app__mask" data-effect>
            <p className="app__message-tit text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">무엇을 했나요</p>
        </div>
        <div className="app__mask" data-effect>
            <p className="app__message-desc text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">My Works</p>
        </div>
      </div>
      <div className="size-full px-10 sm:px-5 lg:px-10 2xl:size-3/5 2xl:px-0 2xl:mr-24" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='app__main-swiper'>
          { isLoading && <p>Loading...</p>}
          { error && <p>Something is wrong</p>}
          { works && <SwiperLists works={works} device={device} slideNum={slideNum} size={_SIZE} hover={hover} />}
        </div>
        <div className='mt-20 md:mt-32'>
          { works && <WorkLists works={works} device={device} size={_SIZE} />}
        </div>
      </div>
    </section>
  );
}

