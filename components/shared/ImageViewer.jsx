"use client"

import React, { useRef, useState } from 'react'
import { useImagesContext, useInteractiveContext } from "@/context/FullContext";
import Image from 'next/image';
import { Button } from '../ui/button';
import { CldImage } from 'next-cloudinary';
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
import { Skeleton } from '../ui/skeleton';

const ComponentToPrint = React.forwardRef((props, ref) => (
    <CldImage
        width={props.imageWidth + 100} 
        height={props.imageHeight + 300}
        src={props.imageId}
        alt="Description of my image"
        ref={ref}
    />
));

const ImageViewer = () => {

    const componentRef = useRef();

    const { applyTransformation } = useInteractiveContext();

    const { 
        originalImageUrl,
        originalImageWidth,
        originalImageHeight,
        originalImageId,
    } = useImagesContext();

    return (
        <div className='bg-slate-100 col-span-3 p-4 flex flex-col'>
            <div className='pb-3 flex justify-end'>
                {applyTransformation && <Button onClick={() => exportComponentAsJPEG(componentRef, {fileName: 'image'})}>
                    Download
                </Button>}
            </div>
            <div className='bg-slate-100 h-full max-h-screen flex items-center justify-center'>
                {
                    applyTransformation ? 
                    (
                        <ComponentToPrint 
                        imageWidth={originalImageWidth}
                        imageHeight={originalImageHeight}
                        imageId={originalImageId}
                        ref={componentRef} 
                    />
                    ) : 
                    (originalImageUrl && <Image 
                        src={originalImageUrl} 
                        alt='Image' 
                        width={originalImageWidth} 
                        height={originalImageHeight}
                        className='max-h-[500px] w-96'
                    />)
                }
            </div>
        </div>
    )
}

export default ImageViewer
