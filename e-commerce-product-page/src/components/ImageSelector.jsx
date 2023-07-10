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


const ImageSelector = ({ lightbox }) => {

    const [currentSlide, setCurrentSlide] = useState(Product1)
    const handleLightBox = () => {
        lightbox()
    }

    const handleChangeImage = (image) => {
        setCurrentSlide(image)
    }



    return (
        <>
            <div className="border-7 items-center md:gap-7 md:w-full px-16 sm:hidden md:flex md:flex-col lg:w-96 lg:flex-col lg:gap-10 lg:px-0 lg:mt-10">
                <div className="md:h-35 rounded-4xl lg:w-auto" onClick={handleLightBox}>
                    <img className="rounded-2xl md:mt-5 lg:h-80 md:w-80 cursor-pointer xl:h-96 xl:w-full" src={currentSlide} alt="" aria-label="true"></img>
                </div>

                <div className="flex md:justify-center md:flex-wrap md:gap-5 md:h-auto md:w-auto lg:flex-nowrap lg:h-auto ">
                    <img onClick={() => handleChangeImage(Product1)} className="hover:opacity-50 active:opacity-70 active:border-Orange active:border-2 md:w-24 rounded-lg cursor-pointer border-Orange lg:w-16 xl:w-1/5" src={thumbnail1} alt="" aria-label="true"></img>
                    <img onClick={() => handleChangeImage(Product2)} className="hover:opacity-50 active:opacity-50 active:border-Orange active:border-2 md:w-24 rounded-lg cursor-pointer border-Orange lg:w-16 xl:w-1/5" src={thumbnail2} alt="" aria-label="true"></img>
                    <img onClick={() => handleChangeImage(Product3)} className="hover:opacity-50 active:opacity-50 active:border-Orange active:border-2 md:w-24 rounded-lg cursor-pointer border-Orange lg:w-16 xl:w-1/5" src={thumbnail3} alt="" aria-label="true"></img>
                    <img onClick={() => handleChangeImage(Product4)} className="hover:opacity-50 active:opacity-50 active:border-Orange active:border-2 md:w-24 rounded-lg cursor-pointer border-Orange lg:w-16 xl:w-1/5" src={thumbnail4} alt="" aria-label="true"></img>
                </div>

            </div >
        </>
    )
}

export default ImageSelector