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
        <div ref={sectionRef} id="scroll-section-3" className='app__scroll-section flex flex-col items-center 2xl:flex-row 2xl:justify-between 2xl:items-start'>
            <div className="app__main-message flex flex-col items-center gap-y-3">
                <div className="app__mask" data-effect>
                    <p className="app__message-tit text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">나는 누구인가요</p>
                </div>
                <div className="app__mask" data-effect>
                    <p className="app__message-desc text-4l md:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">About Me</p>
                </div>
            </div>
            <div className='flex flex-row my-20'>
                <div className='app__message-text flex-auto size-1/2 text-6xl text-slate-700'>
                    <p className='app__sticky-elem message-text-a text-8xl 2xl:text-9xl' data-opacity-in='[0, 1, { "start": "0.05", "end": "0.13" }]' data-translatey-in='[50, 0, { "start": "0.05", "end": "0.13" }]' data-opacity-out='[1, 0, { "start": "0.18", "end": "0.23" }]' data-translatey-out='[0, -50, { "start": "0.18", "end": "0.23" }]'>나는 음악을 좋아하고</p>
                    <p className='app__sticky-elem message-text-b text-8xl 2xl:text-9xl' data-opacity-in='[0, 1, { "start": "0.25", "end": "0.33" }]' data-opacity-out='[1, 0, { "start": "0.38", "end": "0.43" }]'>음악이 좋은 영화를 보는 걸 더 좋아하며</p>                
                    <p className='app__sticky-elem message-text-c text-8xl 2xl:text-9xl' data-opacity-in='[0, 1, { "start": "0.45", "end": "0.53" }]' data-opacity-out='[1, 0, { "start": "0.58", "end": "0.63" }]'>해질녁 시원한 바람을 맞으며 타는 자전거를 제일 좋아한다.</p>                
                    <p className='app__sticky-elem message-text-d text-8xl 2xl:text-9xl' data-opacity-in='[0, 1, { "start": "0.65", "end": "0.73" }]' data-opacity-out='[1, 0, { "start": "0.79", "end": "0.83" }]'>그리고 시원한 맥주 한잔을 마시며</p>                
                    <p className='app__sticky-elem message-text-e text-8xl 2xl:text-9xl' data-opacity-in='[0, 1, { "start": "0.85", "end": "0.93" }]' data-opacity-out='[1, 0, { "start": "0.97", "end": "1" }]'>마무리 하는 보통의 하루를 소중하게 여긴다!</p>
                </div>  
                <div className='app__main-images flex-auto size-1/2'>
                    {/* <div className='app__sticky-elem'>
                        <img src="/images/img_vinyl_cover.png" alt="" />
                    </div> */}
                </div>
            </div>

        </div>
    );
}

