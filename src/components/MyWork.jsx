import SwiperItem from "./SwiperItem";

export default function MyWork() {
  return (
    <div id="scroll-section-1" className='app__scroll-section flex flex-col items-center 2xl:flex-row 2xl:justify-between'>
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

