import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useParallaxApiContext } from '../context/ParallaxApiContext';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function TopVisual({type, heightNum}) {
    const sectionRef = useRef(null);
    const msgRef = useRef(null);
    const { scrollIndex } = useParallaxApiContext();  
    
    useEffect(() => {
        scrollIndex.setLayout(sectionRef.current, heightNum);
        window.scrollBy(0, 10);
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
            {/* <div className="app__main-message flex flex-wrap justify-start">
                <p ref={msgRef} className="app__message-tit text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl">Scroll To See My Portfolio</p>
            </div> */}
            <div className="app__sticky-elem app__main-message flex flex-wrap justify-start">
                <div className='flex w-full flex-100 text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl'>
                    <div className="app__mask flex-none" data-effect>
                        <p className="app__message-tit" data-effect="slide-right">인연</p>
                    </div>
                    <p className="app__message-tit"data-effect="text-blur" data-delay="1s">을</p>
                    <div className="app__mask flex-none ml-4" data-effect>
                        <p className="app__message-tit txt-point" data-effect="slide-right" data-delay="0.5s" data-sec="0.5" >기회</p>
                    </div>
                    <p className="app__message-tit"data-effect="text-blur" data-delay="1s">로,</p>
                </div>
                <div className="app__mask flex-auto md:flex-none text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl" data-effect>
                    <p className="app__message-tit" data-effect="slide-up" data-delay="1s" data-sec="1">노력을 <span className='txt-point'>실력</span>으로, </p>
                </div>
                <div className="app__mask w-full flex-auto md:flex-none md:w-auto text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl" data-effect>
                    <p className="app__message-tit" data-effect="slide-down" data-delay="1s" data-sec="1">최선을 <span className='txt-point'>결과</span>로!</p>
                </div>
            </div>
            <div className="app__cover-sticky">
                <div className="app__cover-img" data-border-radius='[5, 0, { "start": "0.4", "end": "0.8" }]' data-scale-width='[70, 100, { "start": "0.4", "end": "0.8" }]' data-scale-height='[70, 100, { "start": "0.4", "end": "0.8" }]'>
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

