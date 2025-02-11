import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MyWork() {
  const [swiper, setSwiper] = useState(null);
  
  const fnMansory = (swiper) => {
      [].slice.call(swiper.slides).forEach(function(slide){
          const photoItemLists = slide.querySelectorAll('.photo-item');
          if(photoItemLists.length < 4) return false;
          console.log('photoItemLists', photoItemLists);
          Masonry(photoItemLists)
      });
  }

  const Masonry = (photoItemLists) => {
      const diffValue = getDiff([photoItemLists[0].querySelector('.photo-img').clientHeight, photoItemLists[1].querySelector('.photo-img').clientHeight]);
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

  useEffect(() => {
    console.log('swiper', swiper);
    
    window.addEventListener('resize', function(){
      fnMansory(swiper);
    });
  });

  return (
    <div id="scroll-section-1" className='app__scroll-section flex justify-between'>
      <div className="app__main-message flex flex-wrap justify-start">
        <p className='app__message-tit'>무엇을 했나요</p>
      </div>
      <div className="app__main-swiper">
        <Swiper
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {            
            setSwiper(swiper);
            fnMansory(swiper);
          }}
        >
          <SwiperSlide>
            <div className="photo-list">
              <ul>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243297_30_KOR_20221214171035.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">SUPER SALE WOMEN. up to 50%</p>
                      <p className="desc">8 seconds</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243297_12_KOR_20221216154612.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">2023 Spring 1st Drop <br />Now Release </p>
                      <p className="desc">Beanpole Ladies</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243297_43_KOR_20221221145740.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">버버리/프라다 등: 클래식브랜드 ~71%</p>
                      <p className="desc">Luxury</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243297_42_KOR_20221220170230.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">HOLIDAY GIFT COLLECTION</p>
                      <p className="desc">LEMAIRE</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243297_41_KOR_20221222151759.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">Most Loved Must-Haves</p>
                      <p className="desc">kuho plus</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243297_31_KOR_20221222105715.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">23 S/S 신상 리뷰쓰고 10만 금액권 받아가세요</p>
                      <p className="desc">STUDIO NICHOLSON</p>
                    </div>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="photo-list">
              <ul>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243298_1_KOR_20221221182147.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">감사함 가득 담아 준비한 할인율 최대 80%</p>
                      <p className="desc">General Idea</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243298_59_KOR_20221216181015.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">Holiday Gift Items for Him <br />선물 아이템 무료 교환/반품 </p>
                      <p className="desc">Galaxy</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243298_61_KOR_20221223101851.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">Salon de LEBEIGE</p>
                      <p className="desc">LEBEIGE</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243298_3_KOR_20221216113028.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">아디다스 앵콜 특가, 퍼플코인 추첨 증정</p>
                      <p className="desc">아디다스 코리아</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243298_60_KOR_20221221105123.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">최대 40% 할인, 구매 사은품 증정</p>
                      <p className="desc">AROMATICA</p>
                    </div>
                </li>
                <li className="photo-item">
                    <div className="photo-img" style={{ backgroundImage: 'url(https://img.ssfshop.com/display/category/THM/A30/A16/contents/22463_243298_57_KOR_20221216111326.jpg)'}} alt=''></div>
                    <div className="photo-desc">
                      <p className="tit">22 Winter Collection, 추가 10% 할인</p>
                      <p className="desc">ROGATIS</p>
                    </div>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          {/* <div className="swiper-button-prev hover"></div>
          <div className="swiper-button-next hover"></div>
          <div className="swiper-button-control">
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
          </div> */}
        </Swiper>
      </div>

    </div>
  );
}

