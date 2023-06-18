import React from 'react'
import { useState } from 'react'


import Product1 from '../assets/images/image-product-1.jpg'
import Product2 from '../assets/images/image-product-2.jpg'
import Product3 from '../assets/images/image-product-3.jpg'
import Product4 from '../assets/images/image-product-4.jpg'

import 'flowbite/dist/flowbite.css';

import Arrow from '../assets/images/icon-next.svg';
const ProductImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 1) & 4);
    }

    return (
        <div className="w-full h-80 relative overflow-hidden">
            <div className="w-full flex z-0">
                <img className='duration-700 ease-in-out w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' src={Product1} alt="" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                <img className='duration-700 ease-in-out w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src={Product2} alt="" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                <img className='duration-700 ease-in-out w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src={Product3} alt="" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
                <img className='duration-700 ease-in-out w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' src={Product4} alt="" style={{ transform: `translateX(-${currentSlide * 100}%)` }} />
            </div>

            <div className="w-full  px-3 flex justify-between absolute top-1/2">
                <button onClick={handlePrevSlide} className="flex justify-center items-center w-8 h-8 outline-none rounded-full bg-White cursor-pointer"><img className="-rotate-180 w-2 " src={Arrow} alt="" /></button>
                <button onClick={handleNextSlide} className="flex justify-center items-center w-8 h-8 outline-none rounded-full bg-White cursor-pointer"><img className="w-2" src={Arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default ProductImage