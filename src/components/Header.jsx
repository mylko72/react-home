import React from 'react';
import { TiThMenu } from "react-icons/ti";

export default function Header({ openMenu }) {
    return (
        <header className='app__main-header'>
            <div className='header-inner flex justify-between'>
                <h1 className='app__main-tit text-2xl'>Portfolio</h1>
                <button className='flex items-center app__btn-top text-base' onClick={openMenu}><TiThMenu className='text-2xl' /></button>
            </div>
        </header>
    );
}

