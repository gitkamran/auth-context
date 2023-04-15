import React from 'react'
import { Link } from 'react-router-dom'

const LinkBar = () => {
    return (
        <div className='flex items-center gap-5'>
            <div>
                <Link to="/" className='font-thin text-2xl leading-3'>mkamran</Link>
            </div>
            <ul className='flex items-center gap-3'>
                <li>
                    <Link to="/" className='text-lg text-blue-600'>Home</Link>
                </li>
                <li>
                    <Link to="/about-us" className='text-lg text-blue-600'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default LinkBar