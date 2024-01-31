import React from 'react';
import deatox_logo from '../assets/dashboard/deatox_logo.svg'

const Navbar = () => {
    return (
        <div className='fixed flex shadow-[0_2px_7px_3px_rgba(255, 255, 255, 0.25)]'>
            <div className='ms-20 text-white text-2xl flex gap-16 items-center *:cursor-pointer'>
                <div><img src={deatox_logo} alt="deatox_logo" /></div>
                <div>HOME</div>
                <div>ABOUT</div>
                <div>MEAL PLANS</div>
                <div>WORKOUT ROUTINE</div>
            </div>
            <div className='me-20 flex gap-1 items-center'>
                <div><button className='text-white py-6 px-8'>LOG IN</button></div>
                <div><button className='bg-white text-[#545454] py-2 px-8'>SIGN UP</button></div>
            </div>
        </div>
    )
}

export default Navbar
