import React, { useEffect, useRef, useState } from 'react';

export default function SlideItem({ work }) {
    const [slideWidth, setSlideWidth] = useState(0);
    const [slideHeight, setSlideHeight] = useState(0);
    const itemRef = useRef(null);

    useEffect(() => {
        const { paddingLeft, paddingRight } = window.getComputedStyle(itemRef.current);
        const cWidth = itemRef.current.clientWidth  - (parseInt(paddingLeft) + parseInt(paddingRight));        
        setSlideWidth(cWidth);

        const cHeight = itemRef.current.clientHeight;
        setSlideHeight(cHeight);

        window.addEventListener('resize', () => {
            const cWidth = itemRef.current.clientWidth  - (parseInt(paddingLeft) + parseInt(paddingRight));
            setSlideWidth(cWidth);

            const cHeight = itemRef.current.clientHeight;
            setSlideHeight(cHeight);
        })
    }, []);

    return (
        <li ref={itemRef} className="work-item cursor-pointer">
            <div className="work-img" data-slide-width="true" data-slide-desktop={ slideWidth } data-duration="1s" data-timing-function="cubic-bezier(0.83, 0, 0.17, 1)">
                <img className="object-cover" src={work.thumbnail} alt={work.project} />
            </div>
            <div className="work-desc">
            <p className="tit text-xs sm:text-sm md:text-base 2xl:text-xl line-clamp-2">{ work.project }</p>
            <p className="desc text-xs sm:text-sm md:text-base 2xl:text-xl">{ work.date }</p>
            </div>
        </li>
    );
}

