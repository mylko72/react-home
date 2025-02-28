import React from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

export default function Header() {
    return (
        <header className='app__main-header'>
            <div className='header-inner flex justify-between'>
                <h1 className='app__main-tit text-2xl'>Portfolio</h1>
                <Link to="#" className='flex items-center app__btn-top text-base'><TiThMenu className='text-2xl' /></Link>
            </div>
        </header>
    );
}

