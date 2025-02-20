import React, { useEffect, useRef } from 'react';
import { useParallaxApiContext } from '../context/ParallaxApiContext';

export default function MySelf({ type, heightNum }) {
    const sectionRef = useRef(null);
    const { scrollIndex } = useParallaxApiContext();  
    
    useEffect(() => {
        scrollIndex.setLayout(sectionRef.current, heightNum);
        window.scrollBy(0, 10);
    });

    return (
        <div ref={sectionRef} id="scroll-section-3" className='app__scroll-section'>
            <div className="app__main-message 2xl:ml-40">
                <div className='flex flex-col items-end'>
                    <div className="app__mask" data-effect>
                        <p className="app__message-tit text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">나는 누구인가요</p>
                    </div>
                    <div className="app__mask" data-effect>
                        <p className="app__message-desc text-4l md:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">About Me</p>
                    </div>
                </div>
            </div>
            <div className='app__message-text size-1/2 text-6xl text-slate-700'>
                <p className='app__sticky-elem message-text-a text-8xl 2xl:text-9xl 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.05", "end": "0.1" }]' data-translatey-in='[10, 0, { "start": "0.05", "end": "0.1" }]' data-opacity-out='[1, 0, { "start": "0.18", "end": "0.28" }]' data-translatey-out='[0, -10, { "start": "0.18", "end": "0.28" }]'>나는 음악을 듣는 걸 좋아하고</p>
                <p className='app__sticky-elem message-text-b text-8xl 2xl:text-9xl 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.25", "end": "0.3" }]' data-translatey-in='[10, 0, { "start": "0.25", "end": "0.3" }]' data-opacity-out='[1, 0, { "start": "0.38", "end": "0.48" }]' data-translatey-out='[0, -10, { "start": "0.38", "end": "0.48" }]'>음악이 좋은 영화를 보는 걸 더 좋아하며</p>                
                <p className='app__sticky-elem message-text-c text-8xl 2xl:text-9xl 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.45", "end": "0.5" }]' data-translatey-in='[10, 0, { "start": "0.45", "end": "0.5" }]' data-opacity-out='[1, 0, { "start": "0.58", "end": "0.68" }]' data-translatey-out='[0, -10, { "start": "0.58", "end": "0.68" }]'>해질녁 시원한 바람을 맞으며 타는 자전거를 제일 좋아한다.</p>                
                <p className='app__sticky-elem message-text-d text-8xl 2xl:text-9xl 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.65", "end": "0.7" }]' data-translatey-in='[10, 0, { "start": "0.65", "end": "0.7" }]' data-opacity-out='[1, 0, { "start": "0.79", "end": "0.88" }]' data-translatey-out='[0, -10, { "start": "0.79", "end": "0.88" }]'>그리고 시원한 맥주 한잔을 마시며</p>                
                <p className='app__sticky-elem message-text-e text-8xl 2xl:text-9xl 2xl:ml-20' data-opacity-in='[0, 1, { "start": "0.82", "end": "0.87" }]' data-translatey-in='[10, 0, { "start": "0.82", "end": "0.87" }]' data-opacity-out='[1, 0, { "start": "0.93", "end": "0.99" }]' data-translatey-out='[0, -10, { "start": "0.93", "end": "0.99" }]'>마무리 하는 보통의 하루가 더 좋다!</p>
            </div>  
            <div className='app__main-images'>
                <div className='app__sticky-elem main-image-a'>
                    <img src="/images/img_lp_cover.jpg" className='img-lp-cover' alt="" />
                    <img src="/images/img_lp_iu.jpg" className='img-lp-iu' alt="" />
                </div>
            </div>

        </div>
    );
}

