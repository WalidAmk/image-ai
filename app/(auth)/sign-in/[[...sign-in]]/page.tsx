import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className='w-full mt-10 flex justify-center'>
            <SignIn />
        </div>
    )
}

export default page
