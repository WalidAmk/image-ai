import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { hero_section, cta_section } from '@/contents/landingPage'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Cta = () => {
    return (
        <div className='w-full bg-gradient-to-b from-white to-lightColor py-24'>
            <div className='w-full'>
                <h1 className='mx-auto font-bold w-[300px] md:w-[500px] lg:w-[700px] text-3xl md:text-4xl lg:text-5xl text-center pb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-[#001E7F]'>{cta_section.title}</h1>
                <h3 className='mx-auto font-medium w-[300px] sm:w-[400px] md:w-[600px] pb-24 text-base md:text-md lg:text-xl text-center text-gray-800'>{cta_section.subheadline}</h3>
                <SignedOut>
                    <div className='flex items-center justify-center'>
                        <Link href={'/sign-up'} >
                            <Button className='font-medium text-base md:text-lg px-3 py-1 md:px-6 md:py-3'>
                                {hero_section.cta}
                            </Button>
                        </Link>
                    </div>
                    
                </SignedOut>
                <SignedIn>
                    <div className='flex items-center justify-center'>
                        <Link href={'/editor'} >
                            <Button className='font-medium text-base md:text-lg px-3 py-1 md:px-6 md:py-3'>
                                {hero_section.cta}
                            </Button>
                        </Link>
                    </div>
                </SignedIn>
            </div>
        </div>
    )
}

export default Cta
