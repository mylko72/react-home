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

    const slideEffect = (index) => {
        return oddRow(index) ? 'slide-left' : 'slide-right'
    }

    useEffect(() => {
        // console.log('itemRef', itemRef.current);
    });
    
    return (
        <div className='more-list'>
            <ul className='grid grid-cols-1 md:grid-cols-2'>
                {
                    works.map((work, index) => {
                        if(index >= size){
                            return (
                                <li className={`work-item flex gap-x-10 ` + (!oddRow(index) ? 'flex-row pl-5 mt-20 md:mt-36' : 'flex-row-reverse pt-20 md:pt-10 pr-5')} key={index}>
                                    <div ref={el => itemRef.current[index] = el} className='work-img flex-none w-1/2 overflow-hidden cursor-pointer' data-transform={`translate(${oddRow(index) ? '30px' : '-30px'}, 0)`} data-duration="1s" data-effect={slideEffect(index)} onClick={() => goToSite(work.url[0])}  onMouseEnter={() => onHandleOver(index)} onMouseLeave={() => onHandleOut(index)}>
                                        <img ref={el => imgRef.current[index] = el} className="object-contain w-full h-auto" data-src={work.thumbnail} alt={work.project} />
                                    </div>
                                    <div className={`work-info flex flex-col w-1/2 ` + (oddRow(index) && 'items-end')}>
                                        <div className={`work-desc w-full mb-5 ` + (oddRow(index) && 'text-right')} data-transform="translate(0, 30px)" data-duration="1s" data-delay=".5s" data-effect="slide-up">
                                            <p className="tit text-md md:text-xl 2xl:text-xl line-clamp-2 text-balance">{ work.project }</p>
                                            <p className="desc text-md md:text-base 2xl:text-xl">{ work.date }</p>
                                        </div>
                                        <div className={`work-etc w-full mb-16 ` + (oddRow(index) && 'text-right')} data-transform="translate(0, 30px)" data-duration="1s" data-delay=".7s" data-effect="slide-up">
                                            <p className='mb-2 text-sm font-bold text-balance'>{ work.task }</p>
                                            <p className='text-sm text-balance'>{ work.desc }</p>
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

