import React from 'react';

export default function WorkLists({ works, size }) {
    return (
        <div className='work-list'>
            <ul className='grid grid-cols-3'>
                {
                    works.map((work, index) => {
                        if(index >= size){
                            return (
                                <li className="work-item" key={index}>
                                    <div className="work-img" style={{ backgroundImage: `url(${work.thumbnail})`}}></div>
                                    <div className="work-desc">
                                    <p className="tit text-xs sm:text-sm md:text-base 2xl:text-xl line-clamp-2">{ work.project }</p>
                                    <p className="desc text-xs sm:text-sm md:text-base 2xl:text-xl">{ work.date }</p>
                                    </div>
                                </li>
                            )
                        }
                        return false;
                    })
                }
            </ul>
        </div>
    );
}

