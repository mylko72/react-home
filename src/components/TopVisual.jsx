import React, { useEffect } from 'react';

export default function TopVisual() {

    useEffect(() => {
        window.scrollBy(0, 10);
    });

    return (
        <div id="scroll-section-0" className='app__scroll-section'>
            <div className="app__main-message flex flex-wrap justify-start">
                <div className='flex w-full flex-100'>
                    <div className="app__mask flex-none" data-effect>
                        <p className="app__message-tit" data-effect="slide-right">인연</p>
                    </div>
                    <p className="app__message-tit"data-effect="text-blur" data-delay="1s">을</p>
                    <div className="app__mask flex-none ml-4" data-effect>
                        <p className="app__message-tit txt-point" data-effect="slide-right" data-delay="0.5s" data-sec="0.5" >기회</p>
                    </div>
                    <p className="app__message-tit"data-effect="text-blur" data-delay="1s">로,</p>
                </div>
                {/* <p className="app__message-tit w-full flex-100" data-effect="slide-right">인연을 기회로,</p> */}
                <div className="app__mask flex-none" data-effect>
                    <p className="app__message-tit" data-effect="slide-up" data-delay="1s" data-sec="1">노력을 <span className='txt-point'>실력</span>으로, </p>
                </div>
                <div className="app__mask flex-none" data-effect>
                    <p className="app__message-tit" data-effect="slide-down" data-delay="1s" data-sec="1">최선을 <span className='txt-point'>결과</span>로!</p>
                </div>
            </div>
            <div className="app__cover-sticky">
                <div className="app__cover-img" data-border-radius='[5, 0, { "start": "0.4", "end": "0.8" }]' data-scale-width='[70, 100, { "start": "0.4", "end": "0.8" }]' data-scale-height='[70, 100, { "start": "0.4", "end": "0.8" }]'>
                        {/* <img src="/images/img_top_visual.jpg" alt='' /> */}
                </div>
            </div>
        </div>       
    );
}

