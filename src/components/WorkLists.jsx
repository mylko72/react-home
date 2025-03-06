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

    const oddRow = (index) => {
        return index % 2 === 0;
    }

    useEffect(() => {
        // console.log('itemRef', itemRef.current);
    });
    
    return (
        <div className='more-list'>
            <ul className=''>
                {
                    works.map((work, index) => {
                        if(index >= size){
                            return (
                                <li className={`work-item flex gap-x-10 mb-20 ` + (oddRow(index) ? 'flex-row' : 'flex-row-reverse py-16 px-10 bg-slate-50')} key={index}>
                                    <div ref={el => itemRef.current[index] = el} className='work-img flex-none w-1/3 overflow-hidden cursor-pointer' onClick={() => goToSite(work.url[0])}  onMouseEnter={() => onHandleOver(index)} onMouseLeave={() => onHandleOut(index)}>
                                        <img ref={el => imgRef.current[index] = el} className="object-cover w-full h-full" data-src={work.thumbnail} alt={work.project} data-transform="translate(0, 30px)" data-duration="1s" data-effect="slide-up" />
                                    </div>
                                    <div className={`flex flex-col ` + (!oddRow(index) && 'items-end')}>
                                        <div className={`work-desc w-full mb-5 ` + (!oddRow(index) && 'text-right')}>
                                            <p className="tit text-md md:text-xl 2xl:text-xl line-clamp-2">{ work.project }</p>
                                            <p className="desc text-md md:text-base 2xl:text-xl">{ work.date }</p>
                                        </div>
                                        <div className={`mb-16 ` + (!oddRow(index) && 'text-right')}>
                                            <p className='mb-2 text-sm font-bold'>{ work.task }</p>
                                            <p className='text-sm'>{ work.desc }</p>
                                        </div>
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

