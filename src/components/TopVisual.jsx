import React from 'react';

export default function TopVisual() {
    return (
        <div id="scroll-section-0" className='content__scroll-section'>
            <div class="my__main-message">
                <h1 class="my__message-tit" data-effect="text-blur" data-duration="1s" data-transform="translate(0, 50px)">Lorem Ipsum</h1>
            </div>
            <div class="my__cover-sticky">
                <div class="my__cover-img" data-scale-width='[80, 100, { "start": "0.3", "end": "0.8" }]' data-scale-height='[80, 100, { "start": "0.3", "end": "0.8" }]'>
                    <picture>
                        <img src="/images/img_top_visual.jpg" alt='' />
                    </picture>
                </div>
            </div>
        </div>
        
    );
}

