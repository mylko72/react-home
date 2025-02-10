import React from 'react';

export default function TopVisual() {
    return (
        <div id="scroll-section-0" className='app__scroll-section'>
            <div className="app__main-message -my-24">
                <h1 className="app__message-tit" data-effect="slide-right">인연을 기회로,</h1>
            </div>
            <div className="app__main-message flex">
                <div className="app__mask flex-none" data-effect>
                    <h1 className="app__message-tit" data-effect="slide-up">노력을 실력으로, </h1>
                </div>
                <div className="app__mask flex-none" data-effect>
                    <h1 className="app__message-tit" data-effect="slide-down">최선을 결과로!</h1>
                </div>
            </div>
            <div className="app__cover-sticky">
                <div className="app__cover-img" data-border-radius='[5, 0, { "start": "0.4", "end": "0.8" }]' data-scale-width='[80, 100, { "start": "0.4", "end": "0.8" }]' data-scale-height='[80, 100, { "start": "0.4", "end": "0.8" }]'>
                    <picture>
                        <img src="/images/img_top_visual.jpg" alt='' />
                    </picture>
                </div>
            </div>
        </div>       
    );
}

