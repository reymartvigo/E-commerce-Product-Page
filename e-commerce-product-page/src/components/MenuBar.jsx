import React from 'react'

import Close from '../assets/images/icon-close.svg';
const MenuBar = ({ closeMenu }) => {

    const handleCloseMenu = () => {
        closeMenu();
    }

    return (
        <div className="h-full w-full  bg-Darkgrayishblue2 absolute top-0 left-0 z-20 ">
            <div className="flex flex-col gap-12  w-3/5 h-full py-8 px-5 bg-White md:w-2/5">
                <button className="w-fit outline-none cursor-pointer " onClick={handleCloseMenu} aria-label="close"><img className="w-5" src={Close}></img></button>

                <nav className="mobile-nav ">
                    <ul className='list-none flex flex-col gap-3 font-bold text-lg '>
                        <li className="cursor-pointer w-fit">Collections</li>
                        <li className="cursor-pointer w-fit">Men</li>
                        <li className="cursor-pointer w-fit">Women</li>
                        <li className="cursor-pointer w-fit">About</li>
                        <li className="cursor-pointer w-fit">Contact</li>
                    </ul>
                </nav>


            </div >
        </div>
    )
}

export default MenuBar