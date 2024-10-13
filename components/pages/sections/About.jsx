import React from 'react'
import { about_section } from '@/contents/landingPage'
import Image from 'next/image'
import AboutImage from '@/app/assets/images/about.JPG'

const About = () => {
    return (
        <div id='about' className='w-full bg-gradient-to-b from-white to-lightColor py-24'>
            <div className='w-full'>
                <p className='mx-auto font-semibold w-auto text-xs md:text-base text-center pb-12'>{about_section.smallsubheadline}</p>
                <h1 className='mx-auto font-bold w-[300px] md:w-[500px] lg:w-[700px] text-3xl md:text-4xl lg:text-5xl text-center pb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-[#001E7F]'>{about_section.title}</h1>
                <h3 className='mx-auto font-medium w-[300px] sm:w-[400px] md:w-[600px] pb-24 text-base md:text-md lg:text-xl text-center text-gray-800'>{about_section.subheadline}</h3>
                <div className='flex justify-center items-center px-4'>
                    <Image src={AboutImage} alt='About' width={1000} height={1000}/>
                </div>
            </div>
        </div>
    )
}

export default About
