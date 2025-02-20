import React, { useEffect, useRef } from 'react';

export default function SkillItem({ direction }) {
    const marqueeRef = useRef();
    let position = 0;

    function infiniteXScroll() {
        position = direction === 'left' ? position - 1 : position + 1;
        const condition = direction === 'left' ? position <= -marqueeRef.current.children[0].offsetWidth : position >= marqueeRef.current.children[0].offsetWidth;

        if (condition) {
          position = 0;
        }
        marqueeRef.current.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(infiniteXScroll);
    }

    useEffect(() => {
        infiniteXScroll();
    })

    return (
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
    );
}

