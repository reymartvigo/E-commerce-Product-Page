import React from 'react'

import CartItem from './CartItem'
const Cart = ({ cartItems, deleteItem }) => {

    const handleDelete = () => {
        deleteItem()
    }
    return (
        <div className="z-80 absolute w-11/12 h-60 top-32 left-1/2 right-0 -translate-x-1/2 bg-White rounded-xl overflow-scroll scroll-smooth">
            <div className="px-5 py-4 border-b-2">
                <span className="font-bold text-lg " >Cart</span>
            </div>

            {
                cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <CartItem
                            key={index}
                            item={item}
                            deleteItem={handleDelete}
                        />

                    ))
                ) : (
                    <div className="flex justify-center items-center h-3/4 ">
                        <span className="flex font-bold text-Darkgrayishblue tracking-wider opacity">Your cart is empty</span>
                    </div>
                )}

        </div>
    )
}

export default Cart