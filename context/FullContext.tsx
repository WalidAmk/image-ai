"use client"

import { createContext, useState, ReactNode, useContext } from 'react';

// Define the type for the Images context value
interface ImagesContextType {
    originalImageUrl: string;
    setOriginalImageUrl: (newValue: string) => void;
    originalImageId: string;
    setOriginalImageId: (newValue: string) => void;
    originalImageWidth: number;
    setOriginalImageWidth: (newValue: number) => void;
    originalImageHeight: number;
    setOriginalImageHeight: (newValue: number) => void;
    transformedImageUrl: string;
    setTransformedImageUrl: (newValue: string) => void;
    transformedImageId: string;
    setTransformedImageId: (newValue: string) => void;
    transformedImageWidth: number;
    setTransformedImageWidth: (newValue: number) => void;
    transformedImageHeight: number;
    setTransformedImageHeight: (newValue: number) => void;
}

// Define the type for the Interactive context value
interface InteractiveContextType {
    activeOption: string;
    setActiveOption: (newValue: string) => void;
    applyTransformation: boolean;
    setApplyTransformation: (newValue: boolean) => void;
}

// Create the contexts
const ImagesContext = createContext<ImagesContextType | null>(null);
const InteractiveContext = createContext<InteractiveContextType | null>(null);

// Define the provider's props type
interface CombinedContextProviderProps {
    children: ReactNode;
}

// Create the combined provider component
export const CombinedContextProvider = ({ children }: CombinedContextProviderProps) => {
    // State for Images context
    const [originalImageUrl, setOriginalImageUrl] = useState("");
    const [originalImageId, setOriginalImageId] = useState("");
    const [originalImageWidth, setOriginalImageWidth] = useState(0);
    const [originalImageHeight, setOriginalImageHeight] = useState(0);
    const [transformedImageUrl, setTransformedImageUrl] = useState("");
    const [transformedImageId, setTransformedImageId] = useState("");
    const [transformedImageWidth, setTransformedImageWidth] = useState(0);
    const [transformedImageHeight, setTransformedImageHeight] = useState(0);

    // State for Interactive context
    const [activeOption, setActiveOption] = useState("Background");
    const [applyTransformation, setApplyTransformation] = useState(false);

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
            }}
        >
            <InteractiveContext.Provider
                value={{
                    activeOption, setActiveOption,
                    applyTransformation, setApplyTransformation
                }}
            >
                {children}
            </InteractiveContext.Provider>
        </ImagesContext.Provider>
    );
};

// Custom hooks for consuming the contexts
export const useImagesContext = () => {
    const context = useContext(ImagesContext);
    if (!context) {
        throw new Error("useImagesContext must be used within a CombinedContextProvider");
    }
    return context;
};

export const useInteractiveContext = () => {
    const context = useContext(InteractiveContext);
    if (!context) {
        throw new Error("useInteractiveContext must be used within a CombinedContextProvider");
    }
    return context;
};
