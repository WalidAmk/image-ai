import { title } from '@/contents/contents'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
    return (
        <header className='w-full px-8 py-2 flex justify-between items-center bg-black'>
            <h2
                className='text-2xl font-semibold text-white'
            >{title}</h2>
            <UserButton/>
        </header>
    )
}

export default Header
