import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideItem from './SlideItem';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperLists({ works, device, slideNum, size, hover }) {
    const [ratio, setRatio] = useState(null);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [swiperIst, setSwiperIst] = useState(null);
    const itemsPerView = size/slideNum;
    const listRef = useRef(null);

    // console.log('works', works);

    const initSwiper = (swiper) => {
        fnMansory(swiper);
        setSwiperIst(prev => swiper);

        if(swiper.isBeginning){
          setIsBeginning(true);
        }
    
        window.addEventListener('resize', function(){
          if(device === 'Desktop'){
            fnMansory(swiper);
            setRatio(paddingRatio());
          }
        });
    }

    const onHandleChange = (swiper) => {
      if(swiper.isBeginning){
        setIsBeginning(true);
        setIsEnd(false);
      } else if(swiper.isEnd){
        setIsBeginning(false);
        setIsEnd(true);
      }else{
        setIsBeginning(false);
        setIsEnd(false);
      }
    }
      
    const Masonry = useCallback((photoItemLists) => {
      const diffValue = getDiff([photoItemLists[0].querySelector('.work-img').clientHeight, photoItemLists[1].querySelector('.work-img').clientHeight]);
      const idxArr = [3, 5];
      photoItemLists.forEach(function(item, i){
          if(i === idxArr[0] || i === idxArr[1]){
              item.style.marginTop = '-' + diffValue + 'px';
          }
      });
    }, []);

    const fnMansory = useCallback((swiper) => {
      console.log('call fnMansory...');
      swiper && Array.prototype.slice.call(swiper.slides).forEach(function(slide){
          const photoItemLists = slide.querySelectorAll('.work-item');
          if(photoItemLists.length < 4) return false;
          Masonry(photoItemLists)
      });
    }, [Masonry]);
        
    const getDiff = (arr) => {
      return arr.reduce(function (a, b) {
          return a > b ? a - b : b - a;
      });
    }

    const paddingRatio = () => {
      if(listRef.current === null) return false;
      const listNode = listRef.current?.querySelectorAll('ul');
      return 100 * (listNode[0].clientHeight/listNode[0].clientWidth);
    }

    useEffect(() => {
      console.log('device', device);
      if(device === 'Desktop'){
        fnMansory(swiperIst);
        setRatio(paddingRatio());
      }
    }, [device, fnMansory, swiperIst]);
    
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => onHandleChange(swiper)}
            onSwiper={(swiper) => initSwiper(swiper)}
            className={device === 'Desktop' ? 'app__desktop' : 'app__mobile'}
        >
            {device === 'Desktop' && [...new Array(slideNum)].map((_, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <div ref={listRef} className="work-list" style={{ paddingTop: `${ratio}%`}} data-sequence>
                  <ul>
                    {                      
                      works.map((work, i) => {
                        const direction = i%2 === 0 ? 'width' : 'height';
                        if(index === 0 && i < itemsPerView) {
                          return <SlideItem work={work} device={device} direction={direction} key={i} />
                        }
                        if(index === 1 && i >= itemsPerView && i < (itemsPerView*slideNum)) {
                          return <SlideItem work={work} device={device} direction={direction} key={i} />
                        }
                        return false;
                      })
                    }                        
                  </ul>
                </div>
              </SwiperSlide>  
            ))}
            {device === 'Mobile' && works.map((work, index) => {
                if(index < slideNum){
                  return (
                    <SwiperSlide key={index} virtualIndex={index}>
                      <SlideItem work={work} device={device} />
                    </SwiperSlide>  
                  )
                }
                return false;
              })
            }
          <SlidePrevButton isBeginning={isBeginning} hover={hover} />
          <SlideNextButton isEnd={isEnd} hover={hover} />
        </Swiper>
    );
}

