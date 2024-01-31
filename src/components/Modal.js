import React, { useState } from "react";
import upload from '../assets/dashboard/UploadSimple.svg';
import closeBtn from '../assets/dashboard/XCircle.svg';
import desktop from '../assets/dashboard/desktop.svg';
import logo from '../assets/dashboard/decrackle.svg';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} className='gap-2 mx-auto my-9 py-[18px] px-32 bg-gradient-to-b from-[#BAEF58] to-[#79B509] text-black font-medium rounded-[40px] flex items-center'>Upload The File <img src={upload} alt="upload_icon" className='mx-0.5' /> </button>
            {showModal ? (
                <>
                    <div className="backdrop-brightness-[0.2] flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                        <div className="flex flex-col relative items-center justify-center w-[640px] h-[420px] p-4 float-right bg-[#111] rounded-[28px] border-dashed border-2 border-white">
                            <button className="absolute top-6 right-6 bg-transparent text-black" onClick={() => setShowModal(false)}>
                                <div className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                    <img src={closeBtn} alt="close_btn" />
                                </div>
                            </button>
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-[28px] text-nowrap my-8">Upload File From</div>
                                <div className="flex gap-32">
                                    <div><button className="flex justify-center items-center bg-[#1E1E1E] w-40 h-32 rounded-2xl"><img src={logo} alt="logo" /></button><p className="my-4 text-center">Folder</p></div>
                                    <div><button className="flex justify-center items-center bg-[#1E1E1E] w-40 h-32 rounded-2xl"><img src={desktop} alt="logo" /></button><p className="my-4 text-center">My Desktop</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;