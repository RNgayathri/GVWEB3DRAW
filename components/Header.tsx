import React from 'react'
import Image from 'next/image'
import HeaderImage from '../images/gv-logo.png'
import NavButton from './NavButton'
import {
    Bars3BottomRightIcon
} from "@heroicons/react/24/solid";
import { ConnectWallet, useAddress, useDisconnect } from "@thirdweb-dev/react";

function Header() {
    const address = useAddress();
    const disconnect = useDisconnect();
    return (
        <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
            <div className='flex items-center space-x-2'>
                <div>
                    <Image src={HeaderImage} alt="GV_LOGO" className="rounded-full h-20 w-20" />
                </div>
                <div>
                    <h1 className='text-lg text-white font-bold'>GV_LOTTERY</h1>
                    <p className='text-xs text-emerald-500 truncate'>User: {address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}</p>
                </div>
            </div>
            <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
                <div className='bg-[#0A1F1C] p-4 space-x-2'>
                    <NavButton title="Buy Tickets" />
                    <NavButton title="Logout" onClick={disconnect} />
                </div>
            </div>
            <div className='flex flex-col ml-auto text-right'>
                <Bars3BottomRightIcon className='h-8 w-8 m-auto text-white cursor-pointer' />
                <span className='md:hidden'>
                    <NavButton title="Logout" onClick={disconnect} />
                </span>
            </div>
        </header>
    )
}

export default Header