import React, { useEffect, useRef } from 'react';
import { useParallaxApiContext } from '../context/ParallaxApiContext';

export default function MyFavorite({ type, heightNum }) {
    const sectionRef = useRef(null);
    const { scrollIndex } = useParallaxApiContext();  
    
    useEffect(() => {
        scrollIndex.setLayout(sectionRef.current, heightNum);
        // scrollIndex.scrollMotion.updateHeight();
        // window.scrollBy(0, 10);
    });

    return (
        <section ref={sectionRef} id="scroll-section-4" className='app__scroll-section' data-background-color='["fff", "ffc800", "0074d9", "ff851b", "ffd14d", "fff"]' style={{backgroundColor: '#fff'}} aria-label='좋아하는 것들'>
            <div className="app__main-message flex flex-col md:!left-20 !text-left !translate-x-0">
                <div className="app__mask" data-effect>
                    <p className="app__message-tit text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">무엇을 좋아하나요</p>
                </div>
                <div className="app__mask" data-effect>
                    <p className="app__message-desc text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">Favorite Thing</p>
                </div>
            </div>
            <div className='app__message-text size-full text-6xl text-slate-50'>
                <p className='app__sticky-elem message-text-a text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl font-semibold md:ml-20 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.05", "end": "0.1" }]' data-translatey-in='[10, 0, { "start": "0.05", "end": "0.1" }]' data-opacity-out='[1, 0, { "start": "0.18", "end": "0.28" }]' data-translatey-out='[0, -10, { "start": "0.18", "end": "0.28" }]'>나는 음악을 듣는 걸<br className='hidden 2xl:block' /> 좋아하고</p>
                <p className='app__sticky-elem message-text-b text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl font-semibold md:ml-20 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.25", "end": "0.3" }]' data-translatey-in='[10, 0, { "start": "0.25", "end": "0.3" }]' data-opacity-out='[1, 0, { "start": "0.38", "end": "0.48" }]' data-translatey-out='[0, -10, { "start": "0.38", "end": "0.48" }]'>음악이 좋은 영화를<br className='hidden md:block' /> 보는 걸 더 좋아하며</p>                
                <p className='app__sticky-elem message-text-c text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl font-semibold md:ml-20 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.45", "end": "0.5" }]' data-translatey-in='[10, 0, { "start": "0.45", "end": "0.5" }]' data-opacity-out='[1, 0, { "start": "0.58", "end": "0.68" }]' data-translatey-out='[0, -10, { "start": "0.58", "end": "0.68" }]'>해질녁 시원한 바람을<br className='hidden md:block' /> 맞으며 타는 자전거를<br className='hidden md:block' /> 제일 좋아한다.</p>                
                <p className='app__sticky-elem message-text-d text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl font-semibold md:ml-20 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.65", "end": "0.7" }]' data-translatey-in='[10, 0, { "start": "0.65", "end": "0.7" }]' data-opacity-out='[1, 0, { "start": "0.79", "end": "0.88" }]' data-translatey-out='[0, -10, { "start": "0.79", "end": "0.88" }]'>그리고 시원한 맥주<br className='hidden md:block' /> 한 잔을 마시며</p>                
                <p className='app__sticky-elem message-text-e text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl font-semibold text-center' data-opacity-in='[0, 1, { "start": "0.9", "end": "0.98" }]' data-translatey-in='[10, 5, { "start": "0.9", "end": "0.98" }]'>마무리 하는 보통의<br className='hidden md:block' /> 하루가 더 좋다<span className='inline-block align-middle'>❤️</span>!</p>
            </div>
            <div className='app__main-images hidden sm:block'>
                <div className='app__sticky-elem main-image-a relative z-10'>
                    <img src="/images/img_iu_cover.jpg" className='img-lp-cover w-auto hidden lg:block' alt="" />
                    <img src="/images/img_iu_lp.png" className='img-lp-iu w-auto hidden lg:block' alt="" />
                </div>
                <div className='app__sticky-elem main-image-a2 relative z-0'>
                    <img src="/images/img_music_bg.png" className='h-screen' alt="" />
                </div>
                <div className='app__sticky-elem main-image-b'>
                    <img src="/images/img_movie_bg.png" className='w-auto' alt='' />
                </div>
                <div className='app__sticky-elem main-image-c'>
                    <img src="/images/img_bicycle_bg.png" className='w-auto' alt='' />
                </div>
                <div className='app__sticky-elem main-image-d'>
                    <img src="/images/img_beer_bg.png" className='w-auto' alt='' />
                </div>
                <div className='app__sticky-elem main-image-e'>
                </div>

            </div>

        </section>
    );
}

