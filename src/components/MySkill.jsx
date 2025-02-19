import React from 'react';

export default function MySkill() {
    return (
        <div id="scroll-section-2" className='app__scroll-section flex flex-col items-center 2xl:flex-row 2xl:justify-between 2xl:items-start'>
    
            <div className="app__main-message flex flex-row items-center gap-3 mb-5 2xl:flex-col 2xl:justify-end 2xl:items-end 2xl:ml-10">
                <div className="app__mask" data-effect>
                    <p className="app__message-tit text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">무엇을 할 수 있나요</p>
                </div>
                <div className="app__mask" data-effect>
                    <p className="app__message-desc text-4l md:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">My Skills</p>
                </div>
            </div>

            <div className='app__main-marquee'>
                <div class="marquee-inner">
                    <span><img src="/images/img_vue_logo.jpg" alt='Vue' /></span>
                    <span><img src="/images/img_react_logo.svg" alt='React' /></span>
                    <span><img src="/images/img_react_query_logo.jpg" alt='React Query' /></span>
                    <span><img src="/images/img_javascript_logo.jpg" alt='javascript' /></span>
                    <span><img src="/images/img_jquery_logo.jpg" alt='jquery' /></span>
                    <span><img src="/images/img_tailwind_logo.jpg" alt='tailwind' /></span>
                    <span><img src="/images/img_scss_logo.jpg" alt='scss' /></span>
                </div>                
            </div>
        </div>
    );
}

