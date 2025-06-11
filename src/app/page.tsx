"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/components/Navbar/navbarDesktop";
import Hero from "@/components/LandingPage/Hero";
import Accordion from "@/components/LandingPage/accordion";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("/assets/backgroundAccordion/Static/top-layer.svg");
  const [bottomLayerImage, setBottomLayerImage] = useState("/assets/backgroundAccordion/Static/bottom-layer.svg");
  const [animationKey, setAnimationKey] = useState(0);
  const [showNewBackground, setShowNewBackground] = useState(false); // New state for controlling background visibility

  const handleImageChange = (
    newTopImageSrc: string, 
    newBottomImageSrc: string, 
    title: string, 
    description: string
  ) => {
    if (
      newTopImageSrc !== backgroundImage || 
      newBottomImageSrc !== bottomLayerImage
    ) {
      setAnimationKey(prev => prev + 1);
      
      // Fade out current background images
      setShowNewBackground(false);
      setTimeout(() => {
        setBackgroundImage(newTopImageSrc);
        setBottomLayerImage(newBottomImageSrc);
        setShowNewBackground(true); // Fade in new background images
      }, 200); // Match this timeout with your fade-out duration
    }
  };

  return (
    <main>
      <div 
        className="bg-[#EAE7F0] relative overflow-hidden w-[100%] h-[100%] max-w-[100vw] max-h-[100vh] animate-fade-in"
        style={{ aspectRatio: '16/9' }}
      >
        {/* MAIN PAGE */}
        {/* ... (your existing main page images) */}

        {/* TOP LAYER */}
        <Image
          src="/assets/backgroundMain/grids.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 contain-layout top-[1.667vh] left-[1.563vw] w-full h-full opacity-75 animate-fade-in hover:opacity-90 transition-opacity duration-700 neon-flicker-in-long"
        />
        <Image
          src="/assets/backgroundMain/decorationData.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout top-[0] right-[-10vw] w-[23.281vw] h-[31.204vh] opacity-75 animate-slide-in-right hover-animate-pulse"
        />
        {/* ... (other existing images) */}

        {/* MAIN HERO */}
        <div className="w-full flex flex-col items-center justify-center relative z-10 ">
          <>
          <NavBar/>
          <Hero/>
          </>
        </div>
      </div>

      {/* ACCORDION PAGE */}
      <div 
        id="accordionPage"
        className="bg-[#EAE7F0] flex justify-center align-center place-items-center-safe absolute overflow-hidden w-[100%] h-[100%] max-w-[100vw] max-h-[100vh] animate-fade-in"
      >
        <div 
          className="absolute top-0 left-0 w-full"
          style={{ aspectRatio: '16/9' }}
        >
          <Image
            src="/assets/backgroundAccordion/diagonalstripe.svg"
            alt="Diagonal Stripe Background"
            quality={100}
            fill={true}
            sizes="100vw"
            className="object-cover"
            style={{ aspectRatio: '16/9' }}
          />
          {/* Bottom Layer with Animation */}
          <Image
            key={`bottom-${animationKey}`}
            src={bottomLayerImage}
            alt="Background Accordion"
            quality={100}
            fill={true}
            sizes="100vw"
            className={`object-cover ${showNewBackground ? 'animate-fade-in' : 'animate-fade-out'}`} // Apply fade-in or fade-out
          />
          <Image
            src="/assets/backgroundAccordion/middle-layer.svg"
            alt="Background Accordion"
            quality={100}
            fill={true}
            sizes="100vw"
            className="object-cover opacity-75"
          />
          {/* Top Layer with Animation */}
          <Image
            key={`top-${animationKey}`}
            src={backgroundImage}
            alt="Background Accordion"
            quality={100}
            fill={true}
            sizes="100vw"
            className={`object-cover w-full h-full ${showNewBackground ? 'animate-fade-in' : 'animate-fade-out'}`} // Apply fade-in or fade-out
            style={{ aspectRatio: '16/9' }}
          />
        </div>

        {/* ACCORDION HERO */}
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <>
          <Accordion onImageChange={handleImageChange}/>
          </>
        </div>
      </div>
    </main>
  );
}
