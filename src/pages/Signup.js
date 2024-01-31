import React, { useState } from 'react';
import gif from '../assets/animated-gif.gif';
import googleLogo from '../assets/google.svg';
import fbLogo from '../assets/facebook.svg';
import appleLogo from '../assets/apple.svg';
import useUser from '../context/User';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPwd, setCnfPwd] = useState('')

    const { addUser, setLogIn } = useUser();

    const handleSignIn = (e) => {
        e.preventDefault();
        setLogIn();
    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            addUser(codeResponse);
            setLogIn();
            navigate('/dashboard/addNew')
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <div className='flex'>
            <div className='flex items-center w-1/2 h-screen bg-[#F3DE53]'>
                <img src={gif} alt="animated-gif" />
            </div>
            <div className='m-auto'>
                <div className='text-[32px] text-[#545454] font-[700]'>Welcome!</div>
                <form className='*:my-6 text-[#989898]' onSubmit={handleSignIn}>
                    <div className='*:block *:my-2.5'>
                        <label className='text-base' htmlFor="email">Email</label>
                        <input required onChange={(e) => setEmail(e.target.value)} className='placeholder:text-[20px] py-6 px-5 w-[450px] border border-[#989898] rounded-lg' type="email" name="email" value={email} placeholder='umartinez@gmail.com' />
                    </div>
                    <div className='*:block *:my-2.5'>
                        <label className='text-base' htmlFor="password">Password</label>
                        <input required onChange={(e) => setPassword(e.target.value)} className='placeholder:text-[20px] py-6 px-5 w-[450px] border border-[#989898] rounded-lg' type="password" name="password" value={password} placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                        <p className='text-[#989898]'>Password must be 8 characters long.</p>
                    </div>
                    <div className='*:block *:my-2.5'>
                        <label className='text-base' htmlFor="cnfPwd">Confirm Password</label>
                        <input required onChange={(e) => setCnfPwd(e.target.value)} className='placeholder:text-[20px] py-6 px-5 w-[450px] border border-[#989898] rounded-lg' type="password" name="cnfPWd" value={cnfPwd} placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                    </div>
                    <div>
                        <p className='my-7 text-center'>By signing up, you agree with <a className='text-[#1877F2]' target='_blank' href='/'>terms and conditions</a></p>
                        <button type='submit' className='bg-[#F3DE53] w-full text-[#545454] text-xl py-[18px]'>Signup</button>
                    </div>
                </form>
                <div className='flex items-center justify-center'>
                    <div className="flex-grow border-t border-[#989898]"></div>
                    <div className='mx-8 text-xl text-[#989898]'>Or Sign in with</div>
                    <div className="flex-grow border-t border-[#989898]"></div>
                </div>
                <div className='m-6 gap-[76px] flex items-center justify-center *:cursor-pointer'>
                    <div onClick={handleGoogleLogin}><img src={googleLogo} alt="_logo" /></div>
                    <div><img src={fbLogo} alt="_logo" /></div>
                    <div><img src={appleLogo} alt="_logo" /></div>
                </div>
                <div>
                    <div className=' my-10 text-center text-xl text-[#989898]'>Already have an account? <a href="/" target='_blank'>Log In</a></div></div>
            </div>
        </div>
    )
}

export default Signup
