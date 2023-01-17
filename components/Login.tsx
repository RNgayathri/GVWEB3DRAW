import React from 'react'
import Image from 'next/image'
import HeaderImage from '../images/gv-logo.png'
import { ConnectWallet, useAddress, useMetamask } from "@thirdweb-dev/react";

function Login() {
    const connectWithMetamask = useMetamask();
    return (
        <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
            <div className='flex flex-col items-center mb-10'>
                <Image className='rounded-full h-56 w-56 mb-10' src={HeaderImage} alt="GV_LOGO" />
                <h1 className='text-6xl text-white font-bold'>GV LOTTERY</h1>
                <h2 className='text-white'>Get Started By Connecting to MetaMask</h2>
                <button className='bg-white py-7 px-5 mt-10 rounded-lg shadow-lg font-bold' onClick={connectWithMetamask}>
                    Login with MetaMask
                </button>
            </div>
        </div>
    )
}

export default Login