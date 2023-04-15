import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: () => { }
});

export const AuthContextProvider = (props) => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const loginCheck = localStorage.getItem('LOGGEDIN');
        if (loginCheck) {
            setIsLogin(true);
        }
    }, []);

    const loginHandler = () => {
        setIsLogin(true);
        localStorage.setItem('LOGGEDIN', 'TRUE');
    }

    const logoutHandler = () => {
        setIsLogin(false);
        localStorage.removeItem('LOGGEDIN');
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLogin,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext