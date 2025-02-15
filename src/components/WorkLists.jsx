import React from 'react';

export default function WorkLists({ works, size }) {
    return (
        <div className='more-list'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:gap-y-2 lg:gap-y-4'>
                {
                    works.map((work, index) => {
                        if(index >= size){
                            return (
                                <li className="work-item flex flex-col" key={index}>
                                    <div className='work-img flex items-start w-full'>
                                        <img className="object-cover w-full h-56" src={work.thumbnail} alt={work.project} />
                                    </div>
                                    <div className="work-desc">
                                        <p className="tit text-md md:text-base 2xl:text-xl line-clamp-2">{ work.project }</p>
                                        <p className="desc text-md md:text-base 2xl:text-xl">{ work.date }</p>
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

