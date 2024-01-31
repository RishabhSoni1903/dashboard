import React from 'react'

import translation from '../assets/dashboard/translate.svg'
import subtitlesB from '../assets/dashboard/translateBlack.svg';

const Translation = () => {
    return (
        <div className='w-[640px] p-8 rounded-[28px] border-dashed border-2 border-white'>
            <div className='text-center'>Translation</div>
            <div className='mt-16 h-16'><img className='mx-auto my-9 h-12 w-12' src={translation} alt="file_audio" /></div>
            <button className='whitespace-nowrap mx-auto mt-9 py-[18px] px-28 bg-gradient-to-b from-[#BAEF58] to-[#79B509] text-black font-medium rounded-[40px] flex items-center'>Start Translation<img src={subtitlesB} alt="upload_icon" className='mx-0.5' /> </button>
            <p className='text-sm text-center mb-9 mt-2'>Or drag here</p>
            <div className='text-center my-20'>&#x2022; Audio and Video file only</div>
        </div>
    )
}

export default Translation
