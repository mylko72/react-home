import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { GrPrevious } from "react-icons/gr";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className="swiper-button-prev" onClick={() => swiper.slidePrev()}><GrPrevious className='text-white' /></button>
  );
}