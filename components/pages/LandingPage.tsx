import React from 'react'
import HeaderBanner from '@/components/pages/sections/HeaderBanner'
import Navbar from '@/components/pages/sections/Nabvar'
import Hero from '@/components/pages/sections/Hero'
import About from '@/components/pages/sections/About'
import Features from '@/components/pages/sections/Features'
import Footer from '@/components/pages/sections/Footer'

const LandingPage = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-white w-full max-w-[1500px] relative'>
                <HeaderBanner />
                <Navbar />
                <Hero />
                <About />
                <Features />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage
