"use client"


import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { background_option } from "@/contents/contents"
import { ChromePicker } from 'react-color'
import { useImagesContext, useInteractiveContext } from "@/context/FullContext";



const BackgroundAIOption = () => {

    useEffect(() => {
        const getImages = async () => {
            const response = await fetch('/api/images/get');
            if(response.status === 201) {
                const {data} = await response.json();
                setImages(data)
            }
        }
        getImages()
    },[])
    
    const [images, setImages] = useState([]);

    const { originalImageUrl } = useImagesContext()
    const { setApplyTransformation } = useInteractiveContext();

    const [activeOption, setActiveOption] = useState("");
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [backgroundUrl, setBackgroundUrl] = useState("")
    const [parametres, setParamaetres] = useState({})

    const handleChangeComplete = (color) => {
        setBackgroundColor(color.hex)
    };


    return (
        <Card className="w-full shadow-none border-none rounded-none">
            <CardHeader>
                <CardTitle>{background_option.title}</CardTitle>
                <CardDescription>{background_option.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="options">Options</Label>
                            <Select onValueChange={(value) => setActiveOption(value)}>
                                <SelectTrigger id="options">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {background_option.options.map((option, index) => (
                                        <SelectItem 
                                            key={index} 
                                            value={option}
                                        >
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {activeOption === background_option.options[1] && 
                            <ChromePicker 
                                color={backgroundColor}
                                onChangeComplete={handleChangeComplete}
                            />
                        }
                        {activeOption === background_option.options[2] && 
                            <div>
                                <Label htmlFor="url">Link</Label>
                                {/* <Input
                                    id="url" 
                                    placeholder="Url" 
                                    value={backgroundUrl} 
                                    onChange={handleInputChange}/> */}
                                <Select onValueChange={(value) => setBackgroundUrl(value)}>
                                    <SelectTrigger id="backgroundOption">
                                        <SelectValue placeholder="Select Image" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        {images.map((option, index) => (
                                            <SelectItem 
                                                key={index} 
                                                value={option.url}
                                            >
                                                {option.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        }
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button 
                    variant="outline"
                    onClick={() => {
                        setBackgroundColor('#fff');
                        setBackgroundUrl("");
                    }}
                >
                    Clear
                </Button>
                {
                    originalImageUrl && activeOption === background_option.options[0] || 
                    originalImageUrl && activeOption === background_option.options[1] || 
                    originalImageUrl && activeOption === background_option.options[2] ? 
                    <Button className="mr-2" onClick={() => setApplyTransformation(true)}>Apply</Button>
                    : <></>
                }
            </CardFooter>
        </Card>
    )
}

export default BackgroundAIOption

