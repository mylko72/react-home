import React from 'react';

export default function SlideItem({ work, index }) {
    return (
        <li className="work-item cursor-pointer" key={index}>
            <div className="work-img" style={{ backgroundImage: `url(${work.thumbnail})`}}></div>
            <div className="work-desc">
            <p className="tit text-xs sm:text-sm md:text-base 2xl:text-xl line-clamp-2">{ work.project }</p>
            <p className="desc text-xs sm:text-sm md:text-base 2xl:text-xl">{ work.date }</p>
            </div>
        </li>
    );
}

