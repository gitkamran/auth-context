import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiLogIn } from 'react-icons/bi'
import LinkBar from './LinkBar'
import AuthContext from '../../context/auth-context'
import Cart from '../Cart/Cart'
import CartDropdown from '../Cart/CartDropdown'

const Navbar = () => {
    const ctx = useContext(AuthContext)
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className='flex items-center justify-between p-2 border-b'>
            <LinkBar />
            <div className='flex items-center gap-2'>
                {
                    !ctx.isLoggedIn &&
                    <Link to="/login" className='flex items-center gap-1 bg-blue-500 text-white rounded-md px-2 py-1 text-lg'>
                        <BiLogIn className='text-xl' />
                        Login
                    </Link>
                }
                {
                    ctx.isLoggedIn &&
                    <div className='flex items-center gap-2'>
                        <button className='px-2 py-1 text-lg' onClick={ctx.onLogout} >Logout</button>
                        <div className='relative'>
                            <Cart onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} />
                            {showDropdown && <CartDropdown onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} />}
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default Navbar