import Header from '@/components/shared/Header'
import ImageViewer from '@/components/shared/ImageViewer'
import Navbar from '@/components/shared/Navbar'
import Parameters from '@/components/shared/Parameters'
import { SignedIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <SignedIn>
            <div className='w-screen h-screen flex flex-col'>
                <Header />
                <div className='w-full h-full grid grid-cols-5'>
                    <Navbar/>
                    <ImageViewer/>
                    <Parameters />
                </div>
            </div>
        </SignedIn>
    )
}

export default page
