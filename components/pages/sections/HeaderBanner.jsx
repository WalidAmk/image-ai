import React from 'react'
import { headerBanner, portfolio_link } from '@/contents/landingPage'
import Link from 'next/link'

const banner = () => {
    return (
        <div 
            className='w-full py-1 md:py-2 flex items-center justify-center gap-2
                text-black font-medium md:font-bold text-sm sm:text-md md:text-lg
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        >
            <span>{headerBanner[0]}</span>
            <Link
                href={portfolio_link[0]}
            >
                <span 
                    className='underline'
                >{headerBanner[1]}</span>
            </Link>
        </div>
    )
}

export default banner
