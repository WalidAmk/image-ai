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
import { extract_option } from '@/contents/contents'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { useImagesContext, useInteractiveContext } from '@/context/FullContext'


const ExtractOption = () => {

    const { originalImageUrl } = useImagesContext();
    const { setApplyTransformation } = useInteractiveContext();

    const [prompt, setPrompt] = useState("");

    return (
        <Card className="w-full shadow-none border-none rounded-none">
            <CardHeader>
                <CardTitle>{extract_option.title}</CardTitle>
                <CardDescription>{extract_option.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="prompt">Object name</Label>
                    <Input 
                        id="prompt" 
                        placeholder="Object name" 
                        value={prompt}
                        onChange={(e) => {
                            setPrompt(e.target.value)
                        }}
                    />
                </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <Button 
                    variant="outline"
                    onClick={() => {
                        setPrompt("");
                }}>
                    Clear
                </Button>
                {
                    originalImageUrl && 
                    prompt &&
                        <Button className="mr-2" onClick={() => setApplyTransformation(true)}>Apply</Button>                        
                }
            </CardFooter>
        </Card>
    )
}

export default ExtractOption
