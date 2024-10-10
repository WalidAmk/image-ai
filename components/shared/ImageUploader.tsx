"use client"

import React from 'react';
import { CldUploadWidget, CloudinaryUploadWidgetResults, CloudinaryUploadWidgetInfo } from 'next-cloudinary';
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
                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                    // Ensure that result.info is not a string
                    if (typeof result.info !== 'string') {
                        const info = result.info as CloudinaryUploadWidgetInfo;
                        const image_info: image_info = {
                            user_id: "",
                            name: info?.display_name || '',
                            public_id: info?.public_id || '',
                            url: info?.secure_url || '',
                            width: info?.width || 0,
                            height: info?.height || 0,
                        };
                        saveImageInfo(image_info);
                        setOriginalImageUrl(info?.secure_url || '');
                        setOriginalImageWidth(info?.width || 0);
                        setOriginalImageHeight(info?.height || 0);
                        setOriginalImageId(info?.public_id || '');
                        setApplyTransformation(false);
                    }
                }}
            >
                {({ open }) => {
                    return (
                        <Button onClick={() => open()}>
                            Upload Image
                        </Button>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUploader;
