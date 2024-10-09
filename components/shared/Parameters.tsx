"use client"

import React from 'react'
import ImageUploader from './ImageUploader'
import { useInteractiveContext } from "@/context/FullContext"
import BackgroundAIOption from './BackgroundAIOption'
import ExtractOption from './ExtractOption'
import GenerativeOption from './GenerativeOption'
import { useImagesContext } from "@/context/FullContext";
import ImageDownloader from './ImageDownloader'


const Parameters = () => {

    const { activeOption } = useInteractiveContext()
    const { transformedImageUrl } = useImagesContext()

    return (
        <div className='h-full flex flex-col justify-start'>
            <div className='h-full'>
                {activeOption === "Background" ? <BackgroundAIOption/> : 
                    activeOption === "Extract" ? <ExtractOption/> : <GenerativeOption/>
                }
            </div>
            <div className='flex justify-evenly py-4'>
                <ImageUploader />
                {transformedImageUrl && <ImageDownloader/>}
            </div>
        </div>
    )
}

export default Parameters
