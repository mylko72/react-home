import React, { useEffect, useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideItem from './SlideItem';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SwiperLists({ works, slideNum, size, hover }) {
    const [ratio, setRatio] = useState(null);
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const itemsPerView = size/slideNum;
    const listRef = useRef(null);

    // console.log('works', works);

    const initSwiper = (swiper) => {
        fnMansory(swiper);

        if(swiper.isBeginning){
          setIsBeginning(true);
        }
    
        window.addEventListener('resize', function(){
          fnMansory(swiper);
          setRatio(paddingRatio());
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
      
    const fnMansory = (swiper) => {
          Array.prototype.slice.call(swiper.slides).forEach(function(slide){
              const photoItemLists = slide.querySelectorAll('.work-item');
              if(photoItemLists.length < 4) return false;
            //   console.log('photoItemLists', photoItemLists);
              Masonry(photoItemLists)
          });
    }
    
    const Masonry = (photoItemLists) => {
          const diffValue = getDiff([photoItemLists[0].querySelector('.work-img').clientHeight, photoItemLists[1].querySelector('.work-img').clientHeight]);
          const idxArr = [3, 5];
          photoItemLists.forEach(function(item, i){
              if(i === idxArr[0] || i === idxArr[1]){
                  item.style.marginTop = '-' + diffValue + 'px';
              }
          });
    }
    
    const getDiff = (arr) => {
          return arr.reduce(function (a, b) {
              return a > b ? a - b : b - a;
          });
    }

    const paddingRatio = () => {
      const listNode = listRef.current.querySelectorAll('ul');
      return 100 * (listNode[0].clientHeight/listNode[0].clientWidth);
    }

    useEffect(() => {
      setRatio(paddingRatio());
    }, []);
    
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => onHandleChange(swiper)}
            onSwiper={(swiper) => initSwiper(swiper)}
        >
            {[...new Array(slideNum)].map((_, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <div ref={listRef} className="work-list" style={{ paddingTop: `${ratio}%`}} data-sequence>
                  <ul>
                    {                      
                      works.map((work, i) => {
                        const direction = i%2 === 0 ? 'width' : 'height';
                        if(index === 0 && i < itemsPerView) {
                          return <SlideItem work={work} direction={direction} key={i} />
                        }
                        if(index === 1 && i >= itemsPerView && i < (itemsPerView*slideNum)) {
                          return <SlideItem work={work} direction={direction} key={i} />
                        }
                        return false;
                      })
                    }                        
                  </ul>
                </div>
              </SwiperSlide>  
            ))}
          <SlidePrevButton isBeginning={isBeginning} hover={hover} />
          <SlideNextButton isEnd={isEnd} hover={hover} />
        </Swiper>
    );
}

