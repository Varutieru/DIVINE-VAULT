"use client";
import React, { useState } from "react";
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div className="bg-[#EAE7F0] relative overflow-hidden">
        {/* BOTTOM LAYER */}
        <Image
          src="/assets/background/polygonRight.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[0] right-[0] w-auto"
        />
        <Image
          src="/assets/background/ornament1.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[23.281vw] left-[5.052vw] w-auto"
        />
        <Image
          src="/assets/background/ornament4.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[9.01vw] left-[5.052vw] w-auto"
        />
        <Image
          src="/assets/background/ornament5.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[33.575vw] right-[18.438vw] w-auto"
        />
        
        {/* TOP LAYER */}
        <Image
          src="/assets/background/grids.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[1.667vw] left-[1.563vw] w-auto"
        />
        <Image
          src="/assets/background/decorationData.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[0] right-[0] w-auto"
        />
        <Image
          src="/assets/background/divider3.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[18.75vw] right-[2.604vw] w-auto"
        />
        <Image
          src="/assets/background/divider5.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[7.083vw] left-[1.25vw] w-auto"
        />
        <Image
          src="/assets/background/squareRed.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[10.938vw] right-[17.813vw] w-auto"
        />
        <Image
          src="/assets/background/squareGray.svg"
          alt="Background"
          quality={100}
          width={(1920 * 2) / 3}
          height={(3148 * 2) / 3}
          sizes="100vw"
          className="absolute z-0 top-[10.938vw] right-[14.74vw] w-auto"
        />

        {/* Navbar */}
        <div className="bg-[#F2013C] opacity-10 w-full h-[100px] relative">
          
        </div>

        {/* Hero */}
        <div className="bg-black opacity-10 w-full h-[1080px] relative">
          
        </div>







        {/* boxes */}
        <div className="group flex w-[46.354vw] max-md:flex-col relative justify-center gap-[1.563vw] mb-8">
          <article className="group/article relative w-full grayscale hover:grayscale-0 focus:grayscale-0 focus-within:grayscale-0 shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden md:group-focus:[&:not(:focus)]:w-[66%] md:group-focus-within:[&:not(:focus-within):not(:focus)]:w-[66%] 
            transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3
            before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 focus:before:opacity-100 focus-within:before:opacity-100 
            after:opacity-0 md:group-focus:[&:not(:focus)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:focus)]:after:opacity-100 after:absolute 
            after:inset-0 after:transition-all">
              <a className="absolute inset-0 text-white z-10" href="#0">
                  <span className="absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-focus/article:opacity-100 group-focus-within/article:opacity-100 
                  md:translate-y-2 group-focus/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                  group-focus/article:delay-300 group-focus-within/article:delay-300">"Innovate relentlessly. Stagnation is the enemy of progress."</span>
              </a>
              <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/archangel.png" width="960" height="480" alt="Image 01"></img>
          </article>
          <article className="group/article relative w-full grayscale hover:grayscale-0 focus:grayscale-0 focus-within:grayscale-0 shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden md:group-focus:[&:not(:focus)]:w-[66%] md:group-focus-within:[&:not(:focus-within):not(:focus)]:w-[66%] 
            transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3
            before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 focus:before:opacity-100 focus-within:before:opacity-100 
            after:opacity-0 md:group-focus:[&:not(:focus)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:focus)]:after:opacity-100 after:absolute 
            after:inset-0 after:transition-all">
              <a className="absolute inset-0 text-white z-10" href="#0">
                  <span className="absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-focus/article:opacity-100 group-focus-within/article:opacity-100 
                  md:translate-y-2 group-focus/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                  group-focus/article:delay-300 group-focus-within/article:delay-300">"Embrace failure as a stepping stone to success."</span>
              </a>                    
              <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/kyouka.png" width="960" height="480" alt="Image 02"></img>
          </article>
          <article className="group/article relative w-full grayscale hover:grayscale-0 focus:grayscale-0 focus-within:grayscale-0 shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden md:group-focus:[&:not(:focus)]:w-[66%] md:group-focus-within:[&:not(:focus-within):not(:focus)]:w-[66%] 
            transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3
            before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 focus:before:opacity-100 focus-within:before:opacity-100 
            after:opacity-0 md:group-focus:[&:not(:focus)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:focus)]:after:opacity-100 after:absolute 
            after:inset-0 after:transition-all">
              <a className="absolute inset-0 text-white z-10" href="#0">
                  <span className="absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-focus/article:opacity-100 group-focus-within/article:opacity-100 
                  md:translate-y-2 group-focus/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                  group-focus/article:delay-300 group-focus-within/article:delay-300">"Dream big, start small, but most importantly, start."</span>
              </a>                    
              <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/suigetsu.png" width="960" height="480" alt="Image 03"></img>
          </article>                                
          <article className="group/article relative w-full grayscale hover:grayscale-0 focus:grayscale-0 focus-within:grayscale-0 shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden md:group-focus:[&:not(:focus)]:w-[66%] md:group-focus-within:[&:not(:focus-within):not(:focus)]:w-[66%] 
            transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3
            before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 focus:before:opacity-100 focus-within:before:opacity-100 
            after:opacity-0 md:group-focus:[&:not(:focus)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:focus)]:after:opacity-100 after:absolute 
            after:inset-0 after:transition-all">
              <a className="absolute inset-0 text-white z-10" href="#0">
                  <span className="absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-focus/article:opacity-100 group-focus-within/article:opacity-100 
                  md:translate-y-2 group-focus/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                  group-focus/article:delay-300 group-focus-within/article:delay-300">"Dream big, start small, but most importantly, start."</span>
              </a>                    
              <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/iaido.png" width="960" height="480" alt="Image 03"></img>
          </article>                                
        </div>



      </div>
      
      
      
      
      
      


    </main>
  );
}
