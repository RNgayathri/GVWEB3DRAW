import React from 'react'
import {
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnDownIcon
} from "@heroicons/react/24/solid"
import { ConnectWallet, useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers';
import toast from 'react-hot-toast';

function AdminControls() {
    const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)
    const { data: operatorTotalCommission } = useContractRead(contract, "operatorTotalCommission")
    const { mutateAsync: DrawWinnerTicket } = useContractWrite(contract, "DrawWinnerTicket")
    const { mutateAsync: WithdrawCommission } = useContractWrite(contract, "WithdrawCommission")
    const { mutateAsync: restartDraw } = useContractWrite(contract, "restartDraw")
    const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll")

    const DrawWinner = async () => {
        const notification = toast.loading("Pickingup a Lucky Winner....")
        try {
            const data = await DrawWinnerTicket([{}])
            toast.success("A Winner has been selected!", { id: notification })
        } catch (err) {
            toast.error("something went wrong", { id: notification });
        }
    }
    const drawCommission = async () => {
        const notification = toast.loading("Withdrawing Commission....")
        try {
            const data = await WithdrawCommission([{}])
            toast.success("Commission Withdrawn!", { id: notification })
        } catch (err) {
            toast.error("something went wrong", { id: notification });
        }
    }
    const restartdraw = async () => {
        const notification = toast.loading("Restarting Draw....")
        try {
            const data = await restartDraw([{}])
            toast.success("Restarted the Draw", { id: notification })
        } catch (err) {
            toast.error("something went wrong", { id: notification });
        }
    }
    const Refundall = async () => {
        const notification = toast.loading("Refund All....")
        try {
            const data = await RefundAll([{}])
            toast.success("Refunded All", { id: notification })
        } catch (err) {
            toast.error("something went wrong", { id: notification });
        }
    }

    return (
        <div className='text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border'>
            <h2>Admin Controls</h2>
            <p className='mb-5'>Total Commission To be withdrawn: {operatorTotalCommission && ethers.utils.formatEther(operatorTotalCommission?.toString())}{" "}MATIC</p>
            <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
                <button onClick={DrawWinner} className='admin-buttons'><StarIcon className='h-6 mx-auto mb-2' /> Draw Winner</button>
                <button onClick={drawCommission} className='admin-buttons'><CurrencyDollarIcon className='h-6 mx-auto mb-2' /> Withdraw Commission</button>
                <button onClick={restartdraw} className='admin-buttons'><ArrowPathIcon className='h-6 mx-auto mb-2' />Restart Draw</button>
                <button onClick={Refundall} className='admin-buttons'><ArrowUturnDownIcon className='h-6 mx-auto mb-2' />Refund All</button>
            </div>
        </div>
    )
}

export default AdminControls