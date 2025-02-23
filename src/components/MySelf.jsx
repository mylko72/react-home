import React, { useEffect, useRef } from 'react';
import { useParallaxApiContext } from '../context/ParallaxApiContext';
import { callByObserver } from '../api/ScrollFunction';

export default function MySelf({ type, heightNum }) {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const msgRef = useRef(null); 
    const { scrollIndex } = useParallaxApiContext();  
    
    useEffect(() => {
        let count = 0;
        let index = 0;
        let timer = null;
        const textItems = textRef.current.querySelectorAll('.text-item');
        const typingEffect = function typingEffect() {
            console.log('call typingEffect...');
            let text = textItems[index].textContent;
            if (count < text.length) {
                setTimeout(function () {
                    msgRef.current.innerHTML += text[count];
                    count++;
                    typingEffect();
                }, Math.floor(Math.random(10) * 100));
            } else {
                count = 0;
                // index = index + 1 < textItems.length ? index + 1 : 0;
                if(index + 1 >= textItems.length ){
                    return false;
                }
                index++;
                timer = setTimeout(function () {
                    msgRef.current.innerHTML = '';
                    typingEffect();
                }, 1500);  //텍스트 체인지 시간
            }
        };
        const typingStop = () => {
            console.log('stop typingEffect...');
            index = 0;
            clearTimeout(timer);            
        }  
    
        const config = {
            rootMargin: `0px 0px -${window.innerHeight/2}px 0px`, 
            threshold: 0                
        };
        callByObserver({target: sectionRef.current, showCallback: typingEffect, hideCallback: typingStop, keepObserver:false, options:config });

        scrollIndex.setLayout(sectionRef.current, heightNum);
        window.scrollBy(0, 10);
    });

    return (
        <div ref={sectionRef} id="scroll-section-3" className='app__scroll-section'>
            <div className="app__main-message !w-full flex flex-col">
                <div className='flex flex-col items-center'>
                    <div className="app__mask" data-effect>
                        <p className="app__message-tit text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl" data-effect="slide-up">나는 누구인가요</p>
                    </div>
                    <div className="app__mask" data-effect>
                        <p className="app__message-desc text-4l md:text-4xl xl:text-5xl 2xl:text-6xl" data-effect="slide-down">About Me</p>
                    </div>
                </div>
                <div ref={textRef} className='app__text-items hidden'>
                    <span className='text-item'>19*2년생이며 프리랜서이다.</span>
                    <span className='text-item'>Vue.js와 React에 기반한</span>
                    <span className='text-item'>프론트엔드 퍼블리싱 업무를 주로 하며 </span>
                    <span className='text-item'>UI/UX에 기반한 동적 스크립트 구현과</span>
                    <span className='text-item'>패럴렉스 애니메이션에 관심이 많다.</span>
                </div>
                <div ref={msgRef} className='app__message-text flex justify-center items-center my-28 text-7xl 2xl:text-8xl text-slate-700 text-center'>
                </div>
            </div>
        </div>
    );
}

