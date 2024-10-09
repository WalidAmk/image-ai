import { title } from '@/contents/contents'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <header className='w-full px-8 py-2 flex justify-between items-center bg-black'>
            <h2
                className='text-2xl font-semibold text-white'
            >{title}</h2>
            <SignedOut>
                <Button>
                    <SignInButton />
                </Button>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    )
}

export default Header
