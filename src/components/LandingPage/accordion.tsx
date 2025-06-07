"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"

export const Accordion = () => {
    return (
        <div className="group flex w-[46.354vw] max-md:flex-col relative justify-center gap-[1.563vw] mb-8">
          <article className="group/article relative w-full grayscale hover:grayscale-0 focus:grayscale-0 focus-within:grayscale-0 shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden md:group-focus:[&:not(:focus)]:w-[66%] md:group-focus-within:[&:not(:focus-within):not(:focus)]:w-[66%] 
            transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-1/3
            before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 focus:before:opacity-100 focus-within:before:opacity-100 
            after:opacity-0 md:group-focus:[&:not(:focus)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:focus)]:after:opacity-100 after:absolute 
            after:inset-0 after:transition-all">
              <a className="absolute inset-0 text-white z-10" href="#0">
                  <span className="absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-focus/article:opacity-100 group-focus-within/article:opacity-100 
                  md:translate-y-2 group-focus/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                  group-focus/article:delay-300 group-focus-within/article:delay-300"></span>
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
                  group-focus/article:delay-300 group-focus-within/article:delay-300"></span>
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
                  group-focus/article:delay-300 group-focus-within/article:delay-300"></span>
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
                  group-focus/article:delay-300 group-focus-within/article:delay-300"></span>
              </a>                    
              <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/iaido.png" width="960" height="480" alt="Image 03"></img>
          </article>                                
        </div>
    );
}

export default Accordion;