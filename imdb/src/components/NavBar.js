/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo from "../logo.png";

function NavBar() {
    return <>
        <div className='border pl-12 flex space-x-8 items-center py-4'>
            <img src = {Logo}></img>
            <div className='text-blue-400 font-bold text-3xl'>Movies</div>
            <div className='text-blue-400 font-bold text-3xl'>Favourites</div>
        </div>
    </>;
}

export default NavBar;

