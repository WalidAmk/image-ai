"use client"

import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/icons/logo.png'
import Menu  from '@/app/assets/icons/menu.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
    

const Nabvar = () => {
    return (
        <nav className='py-1 sticky top-0 z-50 w-full  md:py-3 px-6 md:px-12 bg-lightColor flex justify-between items-center'>
            <div className='w-8 h-8 md:w-12 md:h-12 flex justify-center items-center'>
                <Image src={Logo} alt="Logo" width={50} height={50}/>
            </div>
            <div className='hidden md:flex gap-6 items-center font-medium text-gray-800'>
                <Link href={'#about'}>
                    <span className='hover:underline'>About</span>
                </Link>
                <Link href={'#features'}>
                    <span className='hover:underline'>Features</span>
                </Link>
                <Link href={'#testionials'}>
                    <span className='hover:underline'>Testimonials</span>
                </Link>
                <Link href={'#pricing'}>
                    <span className='hover:underline'>Pricing</span>
                </Link>
                <Link href={'/sign-in'}>
                    <Button className='font-medium'>Get Started</Button>
                </Link>
            </div>
            <div className='block md:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <Image src={Menu} alt="Menu" width={30} height={30}/>
                    </SheetTrigger>
                    <SheetContent className='w-full'>
                        <div className='w-full pt-12 grid grid-cols-1 gap-6'>
                            <Link href={'/about'}>
                                <span className='hover:underline'>About</span>
                            </Link>
                            <Link href={'/features'}>
                                <span className='hover:underline'>Features</span>
                            </Link>
                            <Link href={'/testionials'}>
                                <span className='hover:underline'>Testimonials</span>
                            </Link>
                            <Link href={'/pricing'}>
                                <span className='hover:underline'>Pricing</span>
                            </Link>
                            <Link href={'/sign-in'}>
                                <Button className='font-medium'>Get Started</Button>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Nabvar
