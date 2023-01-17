import React from 'react'
import Image from 'next/image'
import RingLoader from "react-spinners/RingLoader";
import HeaderImage from '../images/gv-logo.png'

function Loading() {
    return (
        <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center'>
            <div className='flex items-center space-x-2 mb-10'>
                <Image src={HeaderImage} alt="GV LOGO" className='rounded-full h-20 w-20' />
                <h1 className='text-lg text-white font-bold '>Loading the GV Lottery</h1>
            </div>
            <RingLoader color="white"
                size={30} />
        </div>
    )
}

export default Loading