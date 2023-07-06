import React from 'react'


import Product1 from '../assets/images/image-product-1.jpg'
import Product2 from '../assets/images/image-product-2.jpg'
import Product3 from '../assets/images/image-product-3.jpg'
import Product4 from '../assets/images/image-product-4.jpg'


import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg';


const ImageSelector = () => {
    return (
        <>
            <div className="image-wrapper  justify-center items-center gap-3 w-full px-5 sm:hidden md:flex lg:flex-col lg:gap-10 lg:px-0">
                <div className="main-image h-35 border-4 w-full  bg-Verydarkblue border-7 rounded-xl lg:w-auto">
                    <img className="rounded-lg h-80 w-full" src={Product1} alt="" aria-label="true"></img>
                </div>

                <div className="thumbnails-wrapper flex flex-wrap gap-5 justify-center h-35  w-full lg:flex-nowrap  lg:h-auto lg:w-1/2">
                    <img className="w-36 rounded-lg cursor-pointer border-Orange lg:w-12" src={thumbnail1} alt="" aria-label="true"></img>
                    <img className="w-36 rounded-lg cursor-pointer border-Orange lg:w-12" src={thumbnail2} alt="" aria-label="true"></img>
                    <img className="w-36 rounded-lg cursor-pointer border-Orange lg:w-12" src={thumbnail3} alt="" aria-label="true"></img>
                    <img className="w-36 rounded-lg cursor-pointer border-Orange  lg:w-12" src={thumbnail4} alt="" aria-label="true"></img>
                </div >

            </div >
        </>
    )
}

export default ImageSelector