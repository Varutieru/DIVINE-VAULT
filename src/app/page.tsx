"use client";
import React, { useState } from "react";
import Image from "next/image"
import NavBar from "@/components/Navbar/navbarDesktop";
import Hero from "@/components/LandingPage/Hero";
import Accordion from "@/components/LandingPage/accordion";

export default function Home() {
  return (
    <main>
<<<<<<< HEAD
      <div className="bg-[#EAE7F0] relative overflow-hidden w-[100%] h-[100%] max-w-[100vw] max-h-[100vh]"
      style={{ aspectRatio: '16/9' }}>
=======
      <div className="bg-[#EAE7F0] relative overflow-hidden w-[100%] h-[100%]">
>>>>>>> 585dcbba4fd4d08583237a07764677cc67082ca2
        {/* MAIN PAGE */}
        <Image
          src="/assets/backgroundMain/polygonRight.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 top-[0] right-[-3.5vw] w-[15vw] h-[100vh]"
        />
        <Image
          src="/assets/backgroundMain/ornament1.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 top-[12vh] left-[5.052vw] w-[26.183vw] h-[72.407vh] "
        />
        <Image
          src="/assets/backgroundMain/ornament4.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 top-[9.01vh] left-[5.052vw] w-[16.979vw] h-[40.896vh] opacity-75"
        />
        <Image
          src="/assets/backgroundMain/ornament5.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute contain-layout z-1 bottom-[0] right-[30vw] w-[28.37vw] h-[40.278vh]"
        />
        
        {/* TOP LAYER */}
        <Image
          src="/assets/backgroundMain/grids.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 contain-layout top-[1.667vh] left-[1.563vw] w-full h-full opacity-75"
        />
        <Image
          src="/assets/backgroundMain/decorationData.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout top-[0] right-[-8vw] w-[23.281vw] h-[31.204vh] opacity-75"
        />
        <Image
          src="/assets/backgroundMain/divider3.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout bottom-[0] right-[2.604vw] w-[0.833vw] h-[66.574vh] opacity-75"
        />
        <Image
          src="/assets/backgroundMain/divider5.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout bottom-[0] left-[1.25vw] w-[0.521vw] h-[87.407vh] opacity-75"
        />
        <Image
          src="/assets/backgroundMain/squareRed.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout top-[20vh] right-[15vw] w-[2.503vw] h-[4.39vh]"
        />
        <Image
          src="/assets/backgroundMain/squareGray.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-2 contain-layout top-[20vh] right-[11.75vw] w-[4.39vw] h-[4.39vh]"
        />

        {/*MAIN HERO*/}
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <>
          <NavBar/>
          <Hero/>
          </>
        </div>
      </div>

      
      {/* ACCORDION PAGE */}
      <div className="bg-[#EAE7F0] absolute overflow-hidden w-full h-[100vh]">

        <div 
          className="absolute top-0 left-0 w-full"
          style={{ aspectRatio: '16/9' }}
        >
          <Image
            src="/assets/backgroundAccordion/Static/bottom-layer.svg"
            alt="Background"
            quality={100}
            fill={true}
            sizes="100vw"
            className="object-cover"
            />
        </div>


        {/* ACCORDION HERO */}
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <>
          <Accordion/>
          </>
        </div>

      </div>
      
    </main>
  );
}
