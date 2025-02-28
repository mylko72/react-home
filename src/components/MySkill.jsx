import React from 'react';
// import { useParallaxApiContext } from '../context/ParallaxApiContext';
import SkillItem from './SkillItem';

export default function MySkill() {
    // const { scrollIndex } = useParallaxApiContext();
    // console.log('scrollIndex', scrollIndex);
    // scrollIndex.scrollMotion.infiniteXScroll(marqueeRef.current);

    return (
        <section id="scroll-section-2" className='app__scroll-section flex flex-col items-center'>
    
            <div className="app__main-message flex flex-col items-center gap-y-3">
                <div className="app__mask" data-effect>
                    <p className="app__message-tit text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">무엇을 할 수 있나요</p>
                </div>
                <div className="app__mask" data-effect>
                    <p className="app__message-desc text-4l md:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">My Skills</p>
                </div>
            </div>

            <div className='app__main-marquee'>
                <SkillItem direction="left" />
                <SkillItem direction="right" csName="top-64 justify-end" />
            </div>
        </section>
    );
}

