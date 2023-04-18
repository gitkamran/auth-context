import React from 'react'

const CartDropdown = props => {
    return (
        <div
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className='w-[300px] h-[500px] rounded-md bg-white outline outline-zinc-300 shadow-md absolute top-4 right-4'
        >
            <h2 className='text-center font-bold border-b p-2'>Cart</h2>
        </div>
    )
}

export default CartDropdown