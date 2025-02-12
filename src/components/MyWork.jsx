import SwiperItem from "./SwiperItem";

export default function MyWork() {
  return (
    <div id="scroll-section-1" className='app__scroll-section flex flex-col items-center 2xl:flex-row 2xl:justify-between'>
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

      <div className="app__main-message flex flex-row 2xl:flex-col 2xl:justify-start items-center gap-3 mb-5 2xl:ml-10">
        <div className="app__mask" data-effect>
            <p className="app__message-tit" data-effect="slide-up">무엇을 했나요</p>
        </div>
        <div className="app__mask" data-effect>
            <p className="app__message-desc" data-effect="slide-down">My Works</p>
        </div>
      </div>
      <div className="app__main-swiper">
        <SwiperItem />
      </div>
    </div>
  );
}

