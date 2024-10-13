import { Button } from '@/components/ui/button'
import { hero_section } from '@/contents/landingPage'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full bg-gradient-to-b from-lightColor to-darkColor'>
            <div className='h-full w-full py-32 lg:py-48 pb-28 lg:pb-36 grid grid-cols-1'>
                <h1
                    className='mx-auto font-bold w-[300px] md:w-[500px] lg:w-[700px] text-3xl md:text-4xl lg:text-5xl text-center pb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-[#001E7F]'
                >{hero_section.title}</h1>
                <h3
                    className='mx-auto font-medium w-[300px] sm:w-[400px] md:w-[600px] pb-24 text-base md:text-md lg:text-xl text-center text-gray-800'
                >{hero_section.subheadline}</h3>
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

export default Hero
