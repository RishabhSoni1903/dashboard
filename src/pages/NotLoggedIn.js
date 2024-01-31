import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotLoggedIn = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='text-center m-16 text-4xl text-[#545454]'>
            <div>You must log in to continue!</div>
            <button onClick={handleClick} className='my-10 bg-[#F3DE53] w-40 text-[#545454] text-xl py-[12px]'>Login</button>

        </div>
    )
}

export default NotLoggedIn
