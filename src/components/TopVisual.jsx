import React, { useEffect, useRef } from 'react';
import { useParallaxApiContext } from '../context/ParallaxApiContext';

export default function TopVisual({type, heightNum}) {
    const sectionRef = useRef(null);
    // const msgRef = useRef(null);
    const { scrollIndex } = useParallaxApiContext();  

    // const dataInfo = [
    //     {
    //         'opacity-in': [0, 1, { start: 0.1, end: 0.2 }],
    //         'translatey-in': [20, 0, { start: 0.1, end: 0.2 }],
    //         'opacity-out': [1, 0, { start: 0.25, end: 0.3 }],
    //         'translatey-out': [0, -20, { start: 0.25, end: 0.3 }],
    //     }
    // ]
    
    useEffect(() => {
        scrollIndex.setLayout(sectionRef.current, heightNum);
        // window.scrollBy(0, 10);
    });

    // useGSAP(() => {
    //     let textString = msgRef.current.textContent;
    //     let split = textString.split("");
    //     msgRef.current.textContent = "";
    //     for(let i=0; i<split.length; i++){
    //         msgRef.current.innerHTML += "<span>"+split[i]+"</span>";
    //     }
    //     let tl = gsap.timeline();
    //     console.log('tl', tl);
    //     tl.from("span", {
    //         y: -500,
    //         opacity: 0,
    //         scrollTrigger: {
    //             pin: false,
    //             scrub: 1,
    //             trigger: '',
    //         },
    //         stagger: {
    //             amount: 2
    //         }
    //     })        
    // },{ scope: sectionRef });

    return (
        <section ref={sectionRef} id="scroll-section-0" className='app__scroll-section'>
            {/* <div className="app__main-message !left-1/2 !-translate-x-1/2 !-translate-y-1/2 text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl">
                <p ref={msgRef} className="app__message-tit" data-split-txt data-effect="slide-right" data-callback={JSON.stringify(dataInfo)}>Scroll-To-See-Portfolio</p>
            </div> */}
            <div className="app__main-message flex !left-1/2 !-translate-x-1/2 !-translate-y-1/2 text-4xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl">
                <div className="flex-none message-tit-a" data-opacity-out='[1, 0, { "start": "0.39", "end": "0.49" }]' data-translatey-out='[0, -500, { "start": "0.39", "end": "0.49" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up">S</p>
                </div>
                <div className="flex-none message-tit-b" data-opacity-out='[1, 0, { "start": "0.37", "end": "0.47" }]' data-translatey-out='[0, -500, { "start": "0.37", "end": "0.47" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.1s">c</p>
                </div>
                <div className="flex-none message-tit-c" data-opacity-out='[1, 0, { "start": "0.35", "end": "0.45" }]' data-translatey-out='[0, -500, { "start": "0.35", "end": "0.45" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.2s">r</p>
                </div>
                <div className="flex-none message-tit-d" data-opacity-out='[1, 0, { "start": "0.33", "end": "0.43" }]' data-translatey-out='[0, -500, { "start": "0.33", "end": "0.43" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.3s">o</p>
                </div>
                <div className="flex-none message-tit-e" data-opacity-out='[1, 0, { "start": "0.31", "end": "0.41" }]' data-translatey-out='[0, -500, { "start": "0.31", "end": "0.41" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.4s">l</p>
                </div>
                <div className="flex-none message-tit-f" data-opacity-out='[1, 0, { "start": "0.29", "end": "0.39" }]' data-translatey-out='[0, -500, { "start": "0.29", "end": "0.39" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.5s">l</p>
                </div>
                <div className="flex-none" data-effect>&nbsp;</div>
                <div className="flex-none message-tit-g" data-opacity-out='[1, 0, { "start": "0.27", "end": "0.37" }]' data-translatey-out='[0, -500, { "start": "0.27", "end": "0.37" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.6s">T</p>
                </div>
                <div className="flex-none message-tit-h" data-opacity-out='[1, 0, { "start": "0.25", "end": "0.35" }]' data-translatey-out='[0, -500, { "start": "0.25", "end": "0.35" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.7s">o</p>
                </div>
                <div className="flex-none" data-effect>&nbsp;</div>
                <div className="flex-none message-tit-i" data-opacity-out='[1, 0, { "start": "0.23", "end": "0.33" }]' data-translatey-out='[0, -500, { "start": "0.23", "end": "0.33" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.8s">S</p>
                </div>
                <div className="flex-none message-tit-j" data-opacity-out='[1, 0, { "start": "0.21", "end": "0.31" }]' data-translatey-out='[0, -500, { "start": "0.21", "end": "0.31" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="0.9s">e</p>
                </div>
                <div className="flex-none message-tit-k" data-opacity-out='[1, 0, { "start": "0.19", "end": "0.29" }]' data-translatey-out='[0, -500, { "start": "0.19", "end": "0.29" }]'>
                    <p className="app__message-tit" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1s">e</p>
                </div>
                <div className="flex-none" data-effect>&nbsp;</div>
                <div className="flex-none message-tit-l" data-opacity-out='[1, 0, { "start": "0.17", "end": "0.27" }]' data-translatey-out='[0, -500, { "start": "0.17", "end": "0.27" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.1s">P</p>
                </div>
                <div className="flex-none message-tit-m" data-opacity-out='[1, 0, { "start": "0.15", "end": "0.25" }]' data-translatey-out='[0, -500, { "start": "0.15", "end": "0.25" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.2s">o</p>
                </div>
                <div className="flex-none message-tit-n" data-opacity-out='[1, 0, { "start": "0.13", "end": "0.23" }]' data-translatey-out='[0, -500, { "start": "0.13", "end": "0.23" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.3s">r</p>
                </div>
                <div className="flex-none message-tit-o" data-opacity-out='[1, 0, { "start": "0.11", "end": "0.21" }]' data-translatey-out='[0, -500, { "start": "0.11", "end": "0.21" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.4s">t</p>
                </div>
                <div className="flex-none message-tit-p" data-opacity-out='[1, 0, { "start": "0.09", "end": "0.19" }]' data-translatey-out='[0, -500, { "start": "0.09", "end": "0.19" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.5s">f</p>
                </div>
                <div className="flex-none message-tit-q" data-opacity-out='[1, 0, { "start": "0.07", "end": "0.17" }]' data-translatey-out='[0, -500, { "start": "0.07", "end": "0.17" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.6s">o</p>
                </div>
                <div className="flex-none message-tit-r" data-opacity-out='[1, 0, { "start": "0.05", "end": "0.15" }]' data-translatey-out='[0, -500, { "start": "0.05", "end": "0.15" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.7s">l</p>
                </div>
                <div className="flex-none message-tit-s" data-opacity-out='[1, 0, { "start": "0.03", "end": "0.13" }]' data-translatey-out='[0, -500, { "start": "0.03", "end": "0.13" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.8s">i</p>
                </div>
                <div className="flex-none message-tit-t" data-opacity-out='[1, 0, { "start": "0.01", "end": "0.11" }]' data-translatey-out='[0, -500, { "start": "0.01", "end": "0.11" }]'>
                    <p className="app__message-tit accent-point" data-transform="translate(0, 30px)" data-effect="slide-up" data-delay="1.9s">o</p>
                </div>
            </div>
            <div className="app__sticky-message app__main-message flex flex-wrap justify-start !hidden">
                <div className='flex w-full flex-100 text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl'>
                    <div className="app__mask flex-none" data-effect>
                        <p className="app__message-tit" data-effect="slide-right">인연</p>
                    </div>
                    <p className="app__message-tit" data-effect="text-blur" data-delay="1s">을</p>
                    <div className="app__mask flex-none ml-4" data-effect>
                        <p className="app__message-tit normal-point" data-effect="slide-right" data-delay="0.5s" data-sec="0.5" >기회</p>
                    </div>
                    <p className="app__message-tit" data-effect="text-blur" data-delay="1s">로,</p>
                </div>
                <div className="app__mask flex-auto md:flex-none text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl" data-effect>
                    <p className="app__message-tit" data-effect="slide-up" data-delay="1s" data-sec="1">노력을 <span className='normal-point'>실력</span>으로, </p>
                </div>
                <div className="app__mask w-full flex-auto md:flex-none md:w-auto text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl" data-effect>
                    <p className="app__message-tit" data-effect="slide-down" data-delay="1s" data-sec="1">최선을 <span className='normal-point'>결과</span>로!</p>
                </div>
            </div>
            <div className="app__cover-sticky">
                <div className="app__sticky-elem app__cover-img" data-translate='[0, -80, { "start": "0.05", "end": "0.5" }]' data-border-radius='[5, 0, { "start": "0.05", "end": "0.5" }]' data-scale-width='[70, 100, { "start": "0.05", "end": "0.5" }]' data-scale-height='[80, 100, { "start": "0.05", "end": "0.5" }]'>
                        {/* <img src="/images/img_top_visual.jpg" alt='' /> */}
                </div>
            </div>
            <svg
                className="line-wave"
                preserveAspectRatio="none"
                viewBox="0 0 340 160"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g>
                    <path d="M0 80  C 30 10, 55 10, 85 80 S 140 150, 170 80 C 200 10, 225 10, 255 80 S 310 150, 340 80" />
                </g>
                <g>
                    <path d="M0 80  C 30 10, 55 10, 85 80 S 140 150, 170 80 C 200 10, 225 10, 255 80 S 310 150, 340 80" />
                </g>
                <g>
                    <path d="M0 80  C 30 10, 55 10, 85 80 S 140 150, 170 80 C 200 10, 225 10, 255 80 S 310 150, 340 80" />
                </g>
            </svg>            
        </section>       
    );
}

