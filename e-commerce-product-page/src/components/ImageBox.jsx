import React from 'react'
import { useState } from 'react'

import Product1 from '../assets/images/image-product-1.jpg'
import Product2 from '../assets/images/image-product-2.jpg'
import Product3 from '../assets/images/image-product-3.jpg'
import Product4 from '../assets/images/image-product-4.jpg'


import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';

import close from '../assets/images/icon-close.svg'
import next from '../assets/images/icon-next.svg'
import prev from '../assets/images/icon-previous.svg'
const ImageBox = ({ closeLightBox }) => {



    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);

    }

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1) % 4);
    }

    const handleThumbnail = (slideIndex) => {
        setCurrentSlide(slideIndex)
    }

    const handleCloseLightBox = () => {
        closeLightBox()
    }

    return (
        <div className="w-full min-h-screen absolute z-10 bg-Darkgrayishblue2 lg:flex flex-col items-center justify-center gap-4 md:hidden">
            <div className="flex flex-col w-4/12 gap-4 px-8 items-end relative">
                <button onClick={handleCloseLightBox} aria-label="close" className="w-fit outline-none"><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd" /></svg></button>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex overflow-hidden">
                        <img className="rounded-2xl duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ transform: `translateX(-${currentSlide * 100}%)` }} src={Product1} alt="" aria-label="true"></img>
                        <img className="rounded-2xl duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ transform: `translateX(-${currentSlide * 100}%)` }} src={Product2} alt="" aria-label="true"></img>
                        <img className="rounded-2xl duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ transform: `translateX(-${currentSlide * 100}%)` }} src={Product3} alt="" aria-label="true"></img>
                        <img className="rounded-2xl duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ transform: `translateX(-${currentSlide * 100}%)` }} src={Product4} alt="" aria-label="true"></img>
                    </div>
                    <div className=" w-full flex justify-between absolute">
                        <button onClick={handlePrevSlide} className="w-12 h-12 bg-white rounded-full flex items-center justify-center outline-none" aria-label='prev'><img className="w-3" src={prev}></img></button>
                        <button onClick={handleNextSlide} className="w-12 h-12 bg-white rounded-full flex items-center justify-center outline-none" aria-label='next'><img className="w-3" src={next}></img></button>
                    </div>
                </div>
            </div>

            <div className='flex gap-4'>
                <img onClick={() => handleThumbnail(0)} className='cursor-pointer flex gap-4 rounded-xl w-20 hover:opacity-60' src={thumbnail1} alt="" aria-label="true"></img>
                <img onClick={() => handleThumbnail(1)} className='cursor-pointer flex gap-4 rounded-xl w-20 hover:opacity-60' src={thumbnail2} alt="" aria-label="true"></img>
                <img onClick={() => handleThumbnail(2)} className='cursor-pointer flex gap-4 rounded-xl w-20 hover:opacity-60' src={thumbnail3} alt="" aria-label="true"></img>
                <img onClick={() => handleThumbnail(3)} className='cursor-pointer flex gap-4 rounded-xl w-20 hover:opacity-60' src={thumbnail4} alt="" aria-label="true" ></img >
            </div >
        </div >
    )
}

export default ImageBox