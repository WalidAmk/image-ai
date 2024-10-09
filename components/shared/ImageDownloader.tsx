import React from 'react'
import { useImagesContext } from "@/context/FullContext";
import { Button } from '../ui/button';


const ImageDownloader = () => {

    const { transformedImageUrl, } = useImagesContext()

    const handleDownload = async () => {
        try {
            const response = await fetch(transformedImageUrl); // Fetch the image data
            const blob = await response.blob(); // Convert the response to a blob
    
            // Create a download link and click it programmatically
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "transformed-image.jpg"; // Name of the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
        } catch (error) {
            console.error("Error downloading the image:", error);
        }
    };

    return (
        <>
            {transformedImageUrl &&  <Button onClick={handleDownload}>Download</Button>}
        </>
    )
}

export default ImageDownloader
