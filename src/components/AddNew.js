import React from 'react';
import fileArrowUp from '../assets/dashboard/FileArrowUp.svg'
import Modal from './Modal';

const AddNew = () => {

    return (
        <div className='w-[640px] p-20 rounded-[28px] border-dashed border-2 border-white'>
            <div className='h-16'><img className='mx-auto my-9' src={fileArrowUp} alt="file_upload" /></div>
            <Modal />
            <div className='text-center mt-20'>&#x2022; Audio and Video file only</div>
        </div>
    )
}

export default AddNew
