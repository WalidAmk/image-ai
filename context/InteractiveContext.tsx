"use client"

import { createContext, useState, ReactNode, useContext } from 'react';

interface InteractiveContextType {
    activeOption: string;
    setActiveOption: (newValue: string) => void
}

const InteractiveContext = createContext<InteractiveContextType | null>(null);

// Define the provider's props type
interface InteractiveContextProviderProps {
    children: ReactNode;
}

export const InteractiveContextProvider = ({ children }: InteractiveContextProviderProps) => {
    
    const [activeOption, setActiveOption] = useState("Background")

    return (
        <InteractiveContext.Provider 
            value={{ 
                activeOption, setActiveOption,
        }}>
            {children}
        </InteractiveContext.Provider>
    );
};

export const useInteractiveContext = () => {
    const context = useContext(InteractiveContext);
    if (!context) {
        throw new Error("useMyContext must be used within a InteractiveContextProvider");
    }
    return context;
};

