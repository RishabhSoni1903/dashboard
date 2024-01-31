import React from 'react';
import fileAudio from '../assets/dashboard/FileAudio.svg';
import magicWandB from '../assets/dashboard/MagicWandBlack.svg';

const SpeechEnh = () => {
    return (
        <div className='w-[640px] p-8 rounded-[28px] border-dashed border-2 border-white'>
            <div className='text-center'>Speech Enhancement</div>
            <div className='mt-16 h-16'><img className='mx-auto my-9' src={fileAudio} alt="file_audio" /></div>
            <button className='whitespace-nowrap mx-auto mt-9 py-[18px] px-28 bg-gradient-to-b from-[#BAEF58] to-[#79B509] text-black font-medium rounded-[40px] flex items-center'>Start Speech Enhancement <img src={magicWandB} alt="upload_icon" className='mx-0.5' /> </button>
            <p className='text-sm text-center mb-9 mt-2'>Or drag here</p>
            <div className='text-center mt-20'>&#x2022; Audio and Video file only</div>
            <div className='text-center mt-20 underline text-base'>View Recently speech enhancement files</div>
        </div>
    )
}

export default SpeechEnh
