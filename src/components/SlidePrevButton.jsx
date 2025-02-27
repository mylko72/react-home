import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { GrPrevious } from "react-icons/gr";

export default function SlidePrevButton({ isBeginning, hover }) {
  const swiper = useSwiper();

  return (
    <button className={'swiper-button-prev ' + (isBeginning && 'swiper-button-disabled') + (hover && ' hover') } onClick={() => swiper.slidePrev()}><GrPrevious className='text-white' /></button>
  );
}