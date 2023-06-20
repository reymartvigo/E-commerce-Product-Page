import React from 'react'

import thumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import trash from '../assets/images/icon-delete.svg';
const CartItem = ({ item, deleteItem }) => {

    const { price, quantity } = item;

    const newPrice = price.toFixed(2)
    const total = newPrice * quantity
    const newTotal = total.toFixed(2)


    const handleDelete = () => {
        deleteItem(item)
    }
    return (
        <div className='flex flex-col gap-7 w-full py-4 px-4'>

            <div className='flex gap-3 items-center justify-evenly'>
                <img className="w-12 rounded-md" src={thumbnail} alt="" aria-hidden="true" />

                <div className="flex flex-col gap-1">

                    <span className="text-Darkgrayishblue">Fall Limited Edition Sneakers</span>

                    <div className="flex  gap-1">
                        <span className="text-Darkgrayishblue">${newPrice} x<span> {quantity}</span> </span>
                        <span className="font-bold">${newTotal}</span>
                    </div>


                </div>

                <button onClick={handleDelete} className='outline-none cursor-pointer'><img src={trash}></img></button>
            </div>

            <button className="outline-none cursor-pointer bg-Orange py-4 px-2 text-white font-bold tracking-wide text-sm rounded-lg">Checkout</button>



        </div >
    )
}

export default CartItem