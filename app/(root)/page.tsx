"use client"


import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ImageUploader from "@/components/shared/ImageUploader";
import { getImage } from "@/types/variable";
import LandingPage from "@/components/pages/LandingPage";



export default function Home() {

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch('/api/images/get');
      if(response.status === 201) {
        const {data} = await response.json();
        setImages(data)
        console.log(data)
      }
    }
    getImages()
  },[])

  const [images, setImages] = useState([]);

  return (
    <div>
      
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <Header/>
        <div>
          <Link href={'/editor'}>
            <Button className="my-2 mx-8">
              Edit Image
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 mx-8 my-3">
          {images.length !== 0 &&
              images.map((image: getImage) => (
                <Card className="w-96">
                  <CardHeader className="w-full h-64 relative flex items-center justify-center">
                    <Image 
                      src={image.url} 
                      alt="Image" 
                      width={image.width}
                      height={image.height}
                      className={image.width / image.height <= 1 ? 'h-64 w-[auto] p-4' : 'w-[100%] p-4'}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{image.name}</CardTitle>
                    <CardDescription>{image.created_at}</CardDescription>
                  </CardContent>
                </Card>
              ))
            } 
              { images.length === 0 && <p className="text-xl text-black">No Image Uploaded</p>}
            
        </div>
      </SignedIn>
    </div>
  );
}
