import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { GrNext } from "react-icons/gr";

export default function SlideNextButton({ isEnd, hover }) {
  const swiper = useSwiper();

  console.log('hover', hover);

  return (
    <button className={'swiper-button-next ' + (isEnd && 'swiper-button-disabled') + (hover && ' hover')} onClick={() => swiper.slideNext()}><GrNext className='text-white' /></button>
  );
}