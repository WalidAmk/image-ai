"use client"

import { createContext, useState, ReactNode, useContext } from 'react';

// Define the type for the context value
interface ImagesContextType {
    originalImageUrl: string;
    setOriginalImageUrl: (newValue: string) => void
    originalImageId: string;
    setOriginalImageId: (newValue: string) => void;
    originalImageWidth: number;
    setOriginalImageWidth: (newValue: number) => void;
    originalImageHeight: number;
    setOriginalImageHeight: (newValue: number) => void;

    transformedImageUrl: string;
    setTransformedImageUrl: (newValue: string) => void
    transformedImageId: string;
    setTransformedImageId: (newValue: string) => void;
    transformedImageWidth: number;
    setTransformedImageWidth: (newValue: number) => void;
    transformedImageHeight: number;
    setTransformedImageHeight: (newValue: number) => void;
}

// Create the context with a default value (optional)
const ImagesContext = createContext<ImagesContextType | null>(null);

// Define the provider's props type
interface ImagesContextProviderProps {
    children: ReactNode;
}

// Create the provider component
export const ImagesContextProvider = ({ children }: ImagesContextProviderProps) => {
    
    const [originalImageUrl, setOriginalImageUrl] = useState("")
    const [originalImageId, setOriginalImageId] = useState("")
    const [originalImageWidth, setOriginalImageWidth] = useState(0)
    const [originalImageHeight, setOriginalImageHeight] = useState(0)

    const [transformedImageUrl, setTransformedImageUrl] = useState("")
    const [transformedImageId, setTransformedImageId] = useState("")
    const [transformedImageWidth, setTransformedImageWidth] = useState(0)
    const [transformedImageHeight, setTransformedImageHeight] = useState(0)

    return (
        <ImagesContext.Provider 
            value={{ 
                originalImageUrl, setOriginalImageUrl,
                originalImageId, setOriginalImageId, 
                originalImageWidth, setOriginalImageWidth,  
                originalImageHeight, setOriginalImageHeight,
                transformedImageUrl, setTransformedImageUrl,
                transformedImageId, setTransformedImageId,
                transformedImageWidth, setTransformedImageWidth,
                transformedImageHeight, setTransformedImageHeight
        }}>
            {children}
        </ImagesContext.Provider>
    );
};

// Custom hook for consuming the context
export const useImagesContext = () => {
    const context = useContext(ImagesContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyContextProvider");
    }
    return context;
};
