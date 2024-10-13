import React from 'react'
import { pricing_section } from '@/contents/landingPage'
import Credits from '@/app/assets/icons/flash.png'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Pricing = () => {
    return (
        <div id='pricing' className='w-full py-24 md:px-16'>
            <div className='w-full'>
                <h1
                    className='mx-auto font-bold w-[300px] md:w-[500px] lg:w-[700px] text-3xl md:text-4xl lg:text-5xl text-center pb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-[#001E7F]'
                >{pricing_section.title}</h1>
                <h3
                    className='mx-auto font-medium w-[300px] sm:w-[400px] md:w-[600px] pb-16 text-base md:text-md lg:text-xl text-center text-gray-800'
                >{pricing_section.subheadline}</h3>
            </div>
            <div className='w-full grid grid-rows-1 lg:grid-cols-3 gap-6'>
            {pricing_section.plans.map((plan) => (
                <div className='p-6 max-w-96 mx-auto bg-lightColor border-2 border-darkColor rounded-xl'>
                    <div className='flex items-center justify-between pb-4'>
                        <span className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#8377FE] to-[#2D1DF2]'>{plan.credits}</span>
                        <div className='w-24'>
                            <Image src={Credits} alt="Credits" width={999} height={999} />
                        </div>
                    </div>
                    <div className='w-full px-6'>
                        <Button className='w-full font-semibold text-3xl px-3 py-6'>
                            {plan.price}$
                        </Button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Pricing
