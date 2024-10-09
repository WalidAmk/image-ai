import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className='w-full mt-10 flex justify-center'>
            <SignUp />
        </div>
    )
}

export default page
