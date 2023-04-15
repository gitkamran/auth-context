import React, { useContext } from 'react'
import Login from '../components/Auth/Login'
import Navbar from '../components/header/Navbar'
import AuthContext from '../context/auth-context'

const AuthLayout = () => {
    const ctx = useContext(AuthContext)

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center flex-col mt-[10%]'>
                {
                    ctx.isLoggedIn ? <h2>Welcome Admin!</h2> : <Login />
                }
            </div>
        </>
    )
}

export default AuthLayout