"use client"

import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select"
import { generative_option } from '@/contents/contents'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { useImagesContext, useInteractiveContext } from '@/context/FullContext'
import { ChromePicker, ColorResult } from 'react-color';
import { ScrollArea } from '../ui/scroll-area'



const GenerativeOption = () => {

    const { originalImageUrl, originalImageWidth, originalImageHeight } = useImagesContext();
    const { setApplyTransformation } = useInteractiveContext();

    const [selectedOption, setSelectedOption] = useState("");
    
    const [prompt, setPrompt] = useState("");
    const [imageWidth, setImageWidth] = useState(originalImageWidth)
    const [imageHeight, setImageHeight] = useState(originalImageHeight)
    const [replacePrompt, setReplacePrompt] = useState("");
    const [byPrompt, setByPrompt] = useState("");
    const [backgroundColor, setBackgroundColor] = useState<string>('#fff');

    const handleChangeComplete = (color: ColorResult) => {
        setBackgroundColor(color.hex);
    };
    
    return (
        <Card className="w-full shadow-none border-none rounded-none">
            <CardHeader>
                <CardTitle>{generative_option.title}</CardTitle>
                <CardDescription>{generative_option.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='pb-6'>
                    <Label htmlFor="prompt">Generative</Label>
                    <Select onValueChange={(value) => setSelectedOption(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                
                                {generative_option.options.map((option, index) => (
                                    <SelectItem value={option} key={index}>{option}</SelectItem>
                                ))}
                                
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                
                    {
                        selectedOption === generative_option.options[0] && 
                        <>
                            <div className="flex flex-col space-y-1.5 pb-4">
                                <Label htmlFor="prompt">Prompt</Label>
                                <Input 
                                    id="prompt" 
                                    placeholder="Describe background" 
                                    value={prompt}
                                    onChange={(e) => {
                                        setPrompt(e.target.value)
                                    }}
                                />
                            </div>
                        </>
                    }
                    {
                        selectedOption === generative_option.options[1] &&
                        <div className="flex flex-col space-y-1.5 pb-4">
                            <Label htmlFor="prompt">Prompt</Label>
                            <Input 
                                id="prompt" 
                                placeholder="Describe background" 
                                value={prompt}
                                onChange={(e) => {
                                    setPrompt(e.target.value)
                                }}
                            />
                        </div>
                    }
                    {
                        selectedOption === generative_option.options[2] &&
                        <>
                            <div className="flex flex-col space-y-1.5 pb-4">
                                <Label htmlFor="replacePrompt">Original</Label>
                                <Input 
                                    id="replacePrompt" 
                                    placeholder="Replace" 
                                    value={replacePrompt}
                                    onChange={(e) => {
                                        setReplacePrompt(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 pb-4">
                                <Label htmlFor="byPrompt">Replacement</Label>
                                <Input 
                                    id="byPrompt" 
                                    placeholder="By" 
                                    value={byPrompt}
                                    onChange={(e) => {
                                        setByPrompt(e.target.value)
                                    }}
                                />
                            </div>
                        </>
                    }
                    {
                        selectedOption === generative_option.options[3] && 
                        <>
                            <div className="flex flex-col space-y-1.5 pb-4">
                                <Label htmlFor="width">Width</Label>
                                <Input 
                                    type='number'
                                    id="width" 
                                    placeholder="width" 
                                    value={imageWidth}
                                    defaultValue={originalImageWidth}
                                    onChange={(e) => {
                                        setImageWidth(Number(e.target.value))
                                    }}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 pb-4">
                                <Label htmlFor="height">Height</Label>
                                <Input 
                                    type='number'
                                    id="height" 
                                    placeholder="height" 
                                    value={imageHeight}
                                    onChange={(e) => {
                                        setImageHeight(Number(e.target.value))
                                    }}
                                />
                            </div>
                        </>
                    }
                    
                        
                    {selectedOption === generative_option.options[4] && 
                    <>
                        <div className="flex flex-col space-y-1.5 pb-4">
                            <Label htmlFor="prompt">Prompt</Label>
                            <Input 
                                id="prompt" 
                                placeholder="Object to recolor" 
                                value={prompt}
                                onChange={(e) => {
                                    setPrompt(e.target.value)
                                }}
                            />
                        </div>
                        <div className='w-full'>
                        <HoverCard>
                            <HoverCardTrigger>
                                <div 
                                    className='flex items-center px-3 py-2 rounded-sm border-2 border-gray-100'>
                                    <div 
                                        className='w-6 h-6  border border-slate-600'
                                        style={{backgroundColor: backgroundColor}}
                                    ></div>
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <ChromePicker
                                    color={backgroundColor}
                                    onChangeComplete={handleChangeComplete}
                                />
                            </HoverCardContent>
                        </HoverCard>
                        </div>
                    </>}
                    
                    
            </CardContent>
            <CardFooter className='flex justify-between'>
                <Button 
                    variant="outline"
                    onClick={() => {
                        setPrompt("");
                        setReplacePrompt("");
                        setByPrompt("");
                        setBackgroundColor('#fff');
                        setImageWidth(originalImageWidth);
                        setImageHeight(originalImageHeight);
                        setSelectedOption("");
                }}>
                    Clear
                </Button>
                {
                    originalImageUrl && 
                    (selectedOption === generative_option.options[0] && prompt && imageWidth && imageHeight) ||
                    (prompt) ||
                    (replacePrompt && byPrompt) ||
                    (selectedOption === generative_option.options[3] && imageWidth && imageHeight) ||
                    (selectedOption === generative_option.options[4] && backgroundColor && prompt)
                    && <Button onClick={() => setApplyTransformation(true)}>Apply</Button>                        
                }
            </CardFooter>
        </Card>
    )
}

export default GenerativeOption
