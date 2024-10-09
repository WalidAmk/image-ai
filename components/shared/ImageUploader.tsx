"use client"

import React from 'react';
import { CldUploadWidget, CloudinaryUploadResult } from 'next-cloudinary';
import { image_info } from '@/types/supabase';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useImagesContext, useInteractiveContext } from "@/context/FullContext";

const ImageUploader: React.FC = () => {

    const { 
        originalImageUrl, setOriginalImageUrl,
        originalImageId, setOriginalImageId, 
        originalImageWidth, setOriginalImageWidth,  
        originalImageHeight, setOriginalImageHeight, 
    } = useImagesContext();

    const { setApplyTransformation } = useInteractiveContext();
    
    const saveImageInfo = async (imgInfo: image_info) => {
        const response = await fetch('/api/images/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(imgInfo),
        });
    };

    return (
        <div>   
            <CldUploadWidget 
                signatureEndpoint="/api/sign-cloudinary-params"
                options={{ 
                    sources: ['local'], 
                    maxFiles: 1,
                }}
                onSuccess={(result: CloudinaryUploadResult ) => {
                    const image_info: image_info = {
                        user_id: "",
                        name: result?.info?.display_name || '',
                        public_id: result?.info?.public_id || '',
                        url: result?.info?.secure_url || '',
                        width: result?.info?.width || 0,
                        height: result?.info?.height || 0,
                    };
                    saveImageInfo(image_info);
                    setOriginalImageUrl(result?.info?.secure_url || '');
                    setOriginalImageWidth(result?.info?.width || 0);
                    setOriginalImageHeight(result?.info?.height || 0);
                    setOriginalImageId(result?.info?.public_id || '');
                    setApplyTransformation(false);
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
    );
};

export default ImageUploader;
