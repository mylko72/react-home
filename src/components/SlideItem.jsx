import React, { useEffect, useRef, useState } from 'react';

export default function SlideItem({ work, direction }) {
    const [slideWidth, setSlideWidth] = useState(0);
    const [slideHeight, setSlideHeight] = useState(0);
    const itemRef = useRef(null);

    const getSlideValue = () => {
        return direction === 'width' ? slideWidth : slideHeight
    }

    useEffect(() => {
        const cWidth = itemRef.current.clientWidth;  
        setSlideWidth(cWidth);

        const cHeight = itemRef.current.clientHeight;
        setSlideHeight(cHeight);

        window.addEventListener('resize', () => {
            const cWidth = itemRef.current.clientWidth;
            setSlideWidth(cWidth);

            const cHeight = itemRef.current.clientHeight;
            setSlideHeight(cHeight);
        })
    }, []);

    return (
        <li className="work-item cursor-pointer">
            <div ref={itemRef} className="work-img">
                <img className="object-cover" src={work.thumbnail} alt={work.project} data-slide-width={ direction === 'width' } data-slide-height={ direction === 'height' } data-slide-value={ getSlideValue() } data-duration="1s" data-timing-function="cubic-bezier(0.83, 0, 0.17, 1)" />
            </div>
            <div className="work-desc">
            <p className="tit text-xs sm:text-sm md:text-base 2xl:text-xl line-clamp-2">{ work.project }</p>
            <p className="desc text-xs sm:text-sm md:text-base 2xl:text-xl">{ work.date }</p>
            </div>
        </li>
    );
}

