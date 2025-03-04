import React, { useEffect, useRef } from 'react';

export default function WorkLists({ works, device, size }) {
    const itemRef = useRef([]);
    const imgRef = useRef([]);

    const onHandleOver = (index) => {
        if(device === 'Mobile') return false;
        if(works[index].desc.length < 1) return false;
        if(!imgRef.current[index].classList.contains('show-in')) return false;
        itemRef.current[index].classList.add('hover');
    }
    
    const onHandleOut = (index) => {
        if(device === 'Mobile') return false;
        itemRef.current[index].classList.remove('hover');
    }

    const goToSite = (url) => {
        if(url === undefined) return false;
        window.open(url);
    }

    useEffect(() => {
        // console.log('itemRef', itemRef.current);
    });
    
    return (
        <div className='more-list'>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:gap-y-2 lg:gap-y-4 2xl:gap-y-8'>
                {
                    works.map((work, index) => {
                        if(index >= size){
                            return (
                                <li className="work-item flex flex-col cursor-pointer" key={index} onClick={() => goToSite(work.url[0])}  onMouseEnter={() => onHandleOver(index)} onMouseLeave={() => onHandleOut(index)}>
                                    <div ref={el => itemRef.current[index] = el} className='work-img flex items-start w-full h-80 lg:h-64 xl:h-72 2xl:h-80 overflow-hidden'>
                                        <img ref={el => imgRef.current[index] = el} className="object-cover w-full h-full" data-src={work.thumbnail} alt={work.project} data-transform="translate(0, 30px)" data-duration="1s" data-effect="slide-up" />
                                        { device === 'Desktop' && <div className='desc divide-y divide-dashed'>
                                                <p className='mb-4 text-lg font-bold'>{ work.task }</p>
                                                <p className='pt-4'>{ work.desc }</p>
                                            </div>
                                        }
                                    </div>
                                    <div className="work-desc py-5 px-2 md:py-3 md:px-0">
                                        <p className="tit text-md md:text-base 2xl:text-xl line-clamp-2">{ work.project }</p>
                                        <p className="desc text-md md:text-base 2xl:text-xl">{ work.date }</p>
                                    </div>
                                    { device === 'Mobile' && <div className='bg-slate-100 rounded-lg mb-16 py-4 p-6'>
                                            <p className='mb-2 text-sm font-bold'>{ work.task }</p>
                                            <p className='text-sm'>{ work.desc }</p>
                                        </div>
                                    }
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

