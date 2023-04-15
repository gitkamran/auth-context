import React, { useContext } from 'react'
import Navbar from '../components/header/Navbar'
import Admin from '../components/Auth/Admin'
import User from '../components/Auth/User';
import AuthContext from '../context/auth-context';

const Home = () => {
    const ctx = useContext(AuthContext);

    return (
        <>
            <Navbar />
            {ctx.isLoggedIn && <Admin />}
            {!ctx.isLoggedIn && <User />}
        </>
    )
}

export default Home