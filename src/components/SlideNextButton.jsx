import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { GrNext } from "react-icons/gr";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="swiper-button-next" onClick={() => swiper.slideNext()}><GrNext className='text-white' /></button>
  );
}