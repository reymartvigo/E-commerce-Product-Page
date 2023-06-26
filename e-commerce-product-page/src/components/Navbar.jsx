import React from 'react'
import { useState } from 'react';


import Hamburger from '../assets/images/icon-menu.svg';
import Cart from '../assets/images/icon-cart.svg';
import profile from '../assets/images/image-avatar.png';


import MenuBar from './MenuBar';

const Navbar = ({ openCart, cartItemsLength }) => {

    const [showMobileNav, setShowMobileNav] = useState(false)

    const handleOpenCart = () => {
        openCart()
    }

    const handleOpenMenu = () => {
        setShowMobileNav(prevState => !prevState);
    }
    return (
        <div className="header flex justify-between items-center py-5 px-5 relative">
            <div className="logo-wrapper flex items-baseline gap-3 relative">
                <button onClick={handleOpenMenu} className="border-none  outline-none cursor-pointer" aria-label="hamburger"><img className="w-5" src={Hamburger} alt="menu" aria-hidden="true"></img></button>
                <h1 className="font-bold text-4xl tracking-tighter">sneakers</h1>
            </div >

            <div className="cart-wrapper flex items-center gap-3 ">
                <div className="flex relative py-3 px-3">
                    <button onClick={handleOpenCart} className="outline-none cursor-pointer"><img src={Cart} alt="cart" aria-hidden="true"></img></button>
                    {cartItemsLength > 0 &&
                        <span className="px-2 font-bold text-sm text-white bg-Orange rounded-xl absolute top-0 right-0">{cartItemsLength}</span>}

                </div>
                <img className="w-8" src={profile} alt="profile" aria-hidden="true"></img>
            </div>



            {
                showMobileNav &&
                (
                    <MenuBar
                        closeMenu={handleOpenMenu}
                    />
                )

            }



        </div >
    )
}

export default Navbar