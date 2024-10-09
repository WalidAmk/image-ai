"use client"

import React, { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { image_info } from '@/types/supabase';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useImagesContext, useInteractiveContext } from "@/context/FullContext";

const ImageUploader = () => {

    const { 
        originalImageUrl, setOriginalImageUrl,
        originalImageId, setOriginalImageId, 
        originalImageWidth, setOriginalImageWidth,  
        originalImageHeight, setOriginalImageHeight, 
    } = useImagesContext()

    const { setApplyTransformation } = useInteractiveContext();
    
    const saveImageInfo = async (imgInfo: image_info) => {
        const response = await fetch('/api/images/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(imgInfo),
        });
    }


    return (
        <div>   
            <CldUploadWidget 
                signatureEndpoint="/api/sign-cloudinary-params"
                options={{ 
                    sources: ['local'], 
                    maxFiles: 1,
                }}
                onSuccess={(result, { widget }) => {
                    const image_info: image_info = {
                        user_id: "",
                        name: result?.info?.display_name,
                        public_id: result?.info?.public_id,
                        url: result?.info?.secure_url,
                        width: result?.info?.width,
                        height: result?.info?.height,
                    }
                    saveImageInfo(image_info)
                    setOriginalImageUrl(result?.info?.secure_url)
                    setOriginalImageWidth(result?.info?.width)
                    setOriginalImageHeight(result?.info?.height)
                    setOriginalImageId(result?.info?.public_id)
                    setApplyTransformation(false)
                }}
            >
                {({ open }) => {
                    return (
                    <Button onClick={() => open()}>
                        Upload
                    </Button>
                    );
                }}
            </CldUploadWidget>
        </div>
    )
}

export default ImageUploader