import React, { useEffect, useState, useReducer, useContext } from 'react'
import { BiCheckShield, BiLogIn, BiUserCircle } from 'react-icons/bi'
import AuthContext from '../../context/auth-context'

const usernameReducer = (state, action) => {
    return {
        value: action.val,
        isValid: action.val.includes('@')
    }
}
const passwordReducer = (state, action) => {
    return {
        value: action.val,
        isValid: action.val.length >= 6
    }
}
const Login = () => {
    const ctx = useContext(AuthContext)

    const [usernameState, dispatcherUsername] = useReducer(usernameReducer, {
        value: '',
        isValid: null
    });

    const [passwordState, dispatcherPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const [validForm, setValidForm] = useState(false);

    const validUsernameHandler = () => {
        // setValidUsername(usernameState.isValid);
    }

    const validPasswordHandler = () => {
        // setValidPassword(passwordState.isValid);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setValidForm(usernameState.isValid && passwordState.isValid);
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [usernameState, passwordState]);

    const usernameHandler = (e) => {
        dispatcherUsername({
            val: e.target.value
        });
    }

    const passwordHandler = (e) => {
        dispatcherPassword({
            val: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // if (usernameState.value === "mohammad@" && passwordState.value === "123456") {
        // }
    }
    return (
        <form onSubmit={submitHandler} className='w-[300px] m-4 rounded-md outline outline-1 outline-zinc-200 p-4'>
            <div className='flex flex-col'>
                <label className='flex items-center gap-1 text-zinc-600'>
                    <BiUserCircle className='text-lg' />
                    <span>Username</span>
                </label>
                <input
                    type='text'
                    name='username'
                    onChange={usernameHandler}
                    onBlur={validUsernameHandler}
                    className={`textInput ${!usernameState.isValid ? `focus:outline-red-400` : `focus:outline-green-400`}`}
                    placeholder='username'
                />
            </div>
            <div className='flex flex-col mt-2'>
                <label className='flex items-center gap-1 text-zinc-600'>
                    <BiCheckShield className='text-lg' />
                    <span>Password</span>
                </label>
                <input
                    type='password'
                    name='password'
                    onChange={passwordHandler}
                    onBlur={validPasswordHandler}
                    className={`textInput ${!passwordState.isValid ? `focus:outline-red-400` : `focus:outline-green-400`}`}
                    placeholder='password'
                />
            </div>
            <button
                disabled={!validForm}
                onClick={ctx.onLogin}
                type='submit'
                className={`flex items-center justify-center gap-1 bg-blue-500 text-white rounded-md p-2 w-full mt-8 disabled:bg-zinc-500 disabled:cursor-not-allowed`}
            >
                <BiLogIn className='text-lg' />
                <span>Login</span>
            </button>
        </form>
    )
}

export default Login