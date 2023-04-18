import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi"

const Cart = props => {
    return (
        <div
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className='bg-rose-500 p-2 rounded-md cursor-pointer'
        >
            <HiOutlineShoppingCart className='text-xl text-white' />
        </div>
    )
}

export default Cart