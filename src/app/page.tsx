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
  const [showNewBackground, setShowNewBackground] = useState(true);
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
      
      setShowNewBackground(false);
      setTimeout(() => {
        setBackgroundImage(newTopImageSrc);
        setBottomLayerImage(newBottomImageSrc);
        setShowNewBackground(true);
      }, 200);
    }
  };

  return (
    <main>
      <div 
        className="bg-[#EAE7F0] relative overflow-hidden w-[100%] h-[100%] max-w-[100vw] max-h-[100vh] animate-fade-in"
        style={{ aspectRatio: '16/9' }}
      >
        {/* MAIN PAGE */}
        <Image
          src="/assets/backgroundMain/polygonRight.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 top-[0] right-[-3.5vw] w-[15vw] h-[100vh] animate-slide-in-right opacity-0"
        />
        <Image
          src="/assets/backgroundMain/ornament1.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 top-[12vh] left-[5.052vw] w-[30vw] h-[72.407vh] animate-slide-in-left opacity-0 hover:scale-105 transition-transform duration-700 ease-out"
        />
        <Image
          src="/assets/backgroundMain/ornament4.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 top-[9.01vh] left-[5.052vw] w-[16.979vw] h-[40.896vh] opacity-75 animate-fade-in-up hover:opacity-100 transition-opacity duration-500"
        />
        <Image
          src="/assets/backgroundMain/ornament5.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 bottom-[0] right-[25vw] w-[28.37vw] h-[40.278vh] animate-slide-in-bottom opacity-0 hover:scale-110 transition-transform duration-800 ease-out"
        />
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
        <Image
          src="/assets/backgroundMain/divider3.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout bottom-[0] right-[1vw] w-[0.833vw] h-[66.574vh] opacity-75 animate-grow-vertical"
        />
        <Image
          src="/assets/backgroundMain/divider5.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout bottom-[0] left-[1.25vw] w-[0.521vw] h-[87.407vh] opacity-75 animate-grow-vertical"
        />
        <Image
          src="/assets/backgroundMain/squareRed.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout top-[20vh] right-[15vw] w-[2.503vw] h-[4.39vh] animate-fade-in-up ghost-flicker-repeat hover:rotate-12 transition-transform duration-300"
        />
        <Image
          src="/assets/backgroundMain/squareGray.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout top-[20vh] right-[11.75vw] w-[4.39vw] h-[4.39vh] animate-fade-in-up ghost-flicker-repeat hover:rotate-6 transition-transform duration-300"
        />

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
