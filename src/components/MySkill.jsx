import React, { useEffect, useRef } from 'react';
import { useParallaxApiContext } from '../context/ParallaxApiContext';

export default function MySkill() {
    const marqueeRef = useRef();
    const marqueeRef2 = useRef();
    // const { scrollIndex } = useParallaxApiContext();
    // console.log('scrollIndex', scrollIndex);

    let position = 0;
    function moveText() {
        position -= 1;
        if (position <= -marqueeRef.current.children[0].offsetWidth) {
          position = 0;
        }
        marqueeRef.current.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveText);
    }
    let position2 = 0;
    function moveText2() {
        position2 += 1;
        if (position2 >= marqueeRef2.current.children[1].offsetWidth) {
          position2 = 0;
        }
        marqueeRef2.current.style.transform = `translateX(${position2}px)`;
        requestAnimationFrame(moveText2);
    }

    useEffect(() => {     
        moveText();  
        moveText2();
        // scrollIndex.scrollMotion.infiniteXScroll(marqueeRef.current);
    });

    return (
        <div id="scroll-section-2" className='app__scroll-section flex flex-col items-center'>
    
            <div className="app__main-message flex flex-col items-center gap-y-3">
                <div className="app__mask" data-effect>
                    <p className="app__message-tit text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">무엇을 할 수 있나요</p>
                </div>
                <div className="app__mask" data-effect>
                    <p className="app__message-desc text-4l md:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">My Skills</p>
                </div>
            </div>

            <div className='app__main-marquee'>
                <div ref={marqueeRef} className="marquee-inner">
                    <span>
                        <img src="/images/img_vue_logo.jpg" alt='Vue' />
                        <img src="/images/img_react_logo.svg" alt='React' />
                        <img src="/images/img_react_query_logo.jpg" alt='React Query' />
                        <img src="/images/img_javascript_logo.jpg" alt='Javascript' />
                        <img src="/images/img_jquery_logo.jpg" alt='Jquery' />
                        <img src="/images/img_tailwind_logo.jpg" alt='Tailwind' />
                        <img src="/images/img_scss_logo.jpg" alt='Scss' />
                        <img src="/images/img_figma_logo.jpg" alt='Figma' />
                        <img src="/images/img_bootstrap_logo.jpg" alt='Bootstrap' />
                        <img src="/images/img_git_logo.jpg" alt='Git' />
                        <img src="/images/img_webpack_logo.jpg" alt='Webpack' />
                        <img src="/images/img_html5_logo.jpg" alt='Html5' />
                        <img src="/images/img_css3_logo.jpg" alt='Css3' />
                    </span>
                    <span>
                        <img src="/images/img_vue_logo.jpg" alt='Vue' />
                        <img src="/images/img_react_logo.svg" alt='React' />
                        <img src="/images/img_react_query_logo.jpg" alt='React Query' />
                        <img src="/images/img_javascript_logo.jpg" alt='Javascript' />
                        <img src="/images/img_jquery_logo.jpg" alt='Jquery' />
                        <img src="/images/img_tailwind_logo.jpg" alt='Tailwind' />
                        <img src="/images/img_scss_logo.jpg" alt='Scss' />
                        <img src="/images/img_figma_logo.jpg" alt='Figma' />
                        <img src="/images/img_bootstrap_logo.jpg" alt='Bootstrap' />
                        <img src="/images/img_git_logo.jpg" alt='Git' />
                        <img src="/images/img_webpack_logo.jpg" alt='Webpack' />
                        <img src="/images/img_html5_logo.jpg" alt='Html5' />
                        <img src="/images/img_css3_logo.jpg" alt='Css3' />
                    </span>
                </div>                
                <div ref={marqueeRef2} className="marquee-inner">
                    <span>
                        <img src="/images/img_vue_logo.jpg" alt='Vue' />
                        <img src="/images/img_react_logo.svg" alt='React' />
                        <img src="/images/img_react_query_logo.jpg" alt='React Query' />
                        <img src="/images/img_javascript_logo.jpg" alt='Javascript' />
                        <img src="/images/img_jquery_logo.jpg" alt='Jquery' />
                        <img src="/images/img_tailwind_logo.jpg" alt='Tailwind' />
                        <img src="/images/img_scss_logo.jpg" alt='Scss' />
                        <img src="/images/img_figma_logo.jpg" alt='Figma' />
                        <img src="/images/img_bootstrap_logo.jpg" alt='Bootstrap' />
                        <img src="/images/img_git_logo.jpg" alt='Git' />
                        <img src="/images/img_webpack_logo.jpg" alt='Webpack' />
                        <img src="/images/img_html5_logo.jpg" alt='Html5' />
                        <img src="/images/img_css3_logo.jpg" alt='Css3' />
                    </span>
                    <span>
                        <img src="/images/img_vue_logo.jpg" alt='Vue' />
                        <img src="/images/img_react_logo.svg" alt='React' />
                        <img src="/images/img_react_query_logo.jpg" alt='React Query' />
                        <img src="/images/img_javascript_logo.jpg" alt='Javascript' />
                        <img src="/images/img_jquery_logo.jpg" alt='Jquery' />
                        <img src="/images/img_tailwind_logo.jpg" alt='Tailwind' />
                        <img src="/images/img_scss_logo.jpg" alt='Scss' />
                        <img src="/images/img_figma_logo.jpg" alt='Figma' />
                        <img src="/images/img_bootstrap_logo.jpg" alt='Bootstrap' />
                        <img src="/images/img_git_logo.jpg" alt='Git' />
                        <img src="/images/img_webpack_logo.jpg" alt='Webpack' />
                        <img src="/images/img_html5_logo.jpg" alt='Html5' />
                        <img src="/images/img_css3_logo.jpg" alt='Css3' />
                    </span>
                </div>                
            </div>
        </div>
    );
}

