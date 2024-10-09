"use client"

import { ai_options } from "@/contents/contents"
import { Button } from "../ui/button"
import { useInteractiveContext } from "@/context/FullContext"


const Navbar = () => {
    
    const { activeOption, setActiveOption } = useInteractiveContext()
    
    return (
        <nav className='bg-black col-span-1'>
            <div className="flex flex-col items-center pt-8">
                {ai_options.map((option, index) => (
                    <div key={index} className="py-2 px-4 w-full">
                        <Button
                        className="w-full"
                            onClick={() => {
                                if(activeOption !== option) {
                                    setActiveOption(option)
                                }
                                
                            }}
                        >{option}</Button>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
