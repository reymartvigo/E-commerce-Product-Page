import React from 'react'
import { useState } from 'react'

import Minus from '../assets/images/icon-minus.svg'
import Add from '../assets/images/icon-plus.svg'

const ItemPrice = ({ addToCart }) => {

    const [quantity, setQuantity] = useState(0)

    const handleAddQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }

    const handleDeductQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity - 1)
    }

    const handleAddToCart = () => {
        addToCart(quantity)
    }


    return (
        <div className="product-wrapper flex flex-col gap-4 px-7 pb-24">
            <div className="price-wrapper flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <h1 className="font-bold text-3xl" >$125.00</h1>
                    <span className="text-md text-Orange font-bold bg-Orange/[0.2] py-0.5 px-1 rounded-md">50%</span>
                </div>
                <div className="discount-wrapper">
                    <span className="text-sm text-Grayishblue line-through ">$250.00</span>
                </div>
            </div>

            <div className='quantity-wrapper flex justify-between items-center w-full  rounded-lg px-3 py-3 bg-Lightgrayishblue' >
                <button disabled={quantity === 0} onClick={handleDeductQuantity} className="outline-none" aria-label="minus"><img src={Minus} alt="" aria-hidden="true"></img></button>
                <span className="font-bold text-sm">{quantity}</span>
                <button onClick={handleAddQuantity} className="outline-none" aria-label="add"><img src={Add} alt="" aria-hidden="true"></img></button>
            </div>

            <button disabled={quantity === 0} onClick={handleAddToCart} className="outline-none font-bold tracking-wide rounded-lg py-3 px-3 flex justify-center gap-3 items-center bg-Orange text-white text-sm"><ion-icon className="text-white font-bold text-md" name="cart-outline"></ion-icon>Add to cart</button>
        </div>
    )
}

export default ItemPrice