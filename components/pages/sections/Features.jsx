import React from 'react'
import { features_section } from '@/contents/landingPage'
import Image from 'next/image'
import Cube from '@/app/assets/icons/cube.png'


const Features = () => {
    return (
        <div id='features' className='w-full py-24 md:px-16'>
            <div className='w-full'>
                <h1
                    className='mx-auto font-bold w-[300px] md:w-[500px] lg:w-[700px] text-3xl md:text-4xl lg:text-5xl text-center pb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-[#001E7F]'
                >{features_section.title}</h1>
                <h3
                    className='mx-auto font-medium w-[300px] sm:w-[400px] md:w-[600px] pb-16 text-base md:text-md lg:text-xl text-center text-gray-800'
                >{features_section.subheadline}</h3>
            </div>
            <div className='grid grid-rows lg:grid-cols-3 gap-6'>
                <div className='bg-lightColor px-2 py-8 lg:p-8 border-2 border-darkColor max-w-80  mx-auto'>
                    <div className='grid grid-cols-1'>
                        <Image className='mx-auto pb-3' src={Cube} alt='Cube' width={50} height={50} />
                        <h1 className='font-semibold mx-auto text-darkColor pb-3'>{features_section.features[0].title}</h1>
                        <p className='font-base text-center mx-auto text-gray-700 '>{features_section.features[0].description}</p>
                    </div>
                </div>
                <div className='bg-lightColor p-8 border-2 border-darkColor max-w-80 mx-auto'>
                    <div className='grid grid-cols-1'>
                        <Image className='mx-auto pb-3' src={Cube} alt='Cube' width={50} height={50} />
                        <h1 className='font-semibold mx-auto text-darkColor pb-3'>{features_section.features[1].title}</h1>
                        <p className='font-base text-center mx-auto text-gray-700 '>{features_section.features[1].description}</p>
                    </div>
                </div>
                <div className='bg-lightColor p-8 border-2 border-darkColor max-w-80 mx-auto'>
                    <div className='grid grid-cols-1'>
                        <Image className='mx-auto pb-3' src={Cube} alt='Cube' width={50} height={50} />
                        <h1 className='font-semibold mx-auto text-darkColor pb-3'>{features_section.features[2].title}</h1>
                        <p className='font-base text-center mx-auto text-gray-700 '>{features_section.features[2].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
