"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image"

export const Hero = () => {
    return (
        <div className="w-full mt-[2vw] z-100">
            <div className="flex flex-row pl-[9.271vw] gap-4">
                <div className="relative text-black h-[600px] w-[49.635vw] font-neotriad">
                    <Image
                        src="/assets/hero/squareStriped.svg"
                        alt="Background"
                        quality={100}
                        width={(1920 * 2) / 3}
                        height={(3148 * 2) / 3}
                        sizes="100vw"
                        className="w-[10%] mb-8"
                    />
                    <div className="items-center text-black mb-6">
                        <Image
                            src="/assets/hero/title.svg"
                            alt="Background"
                            quality={100}
                            width={(1920 * 2) / 3}
                            height={(3148 * 2) / 3}
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="items-center text-black mb-7">
                        <Image
                            src="/assets/hero/title2.svg"
                            alt="Background"
                            quality={100}
                            width={(1920 * 2) / 3}
                            height={(3148 * 2) / 3}
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    {/* <div className="leading-none text-black text-[4.814vw] mb-2">
                        THE DIVINED APPARELS
                    </div> */}
                    <div className="flex flex-row gap-3 mb-6">
                        <Image
                            src="/assets/hero/window1.svg"
                            alt="Background"
                            quality={100}
                            width={(1920 * 2) / 3}
                            height={(3148 * 2) / 3}
                            sizes="100vw"
                            className="w-[12.845vw]"
                        />
                        <Image
                            src="/assets/hero/window2.svg"
                            alt="Background"
                            quality={100}
                            width={(1920 * 2) / 3}
                            height={(3148 * 2) / 3}
                            sizes="100vw"
                            className="w-[12.845vw]"
                        />
                        <Image
                            src="/assets/hero/window3.svg"
                            alt="Background"
                            quality={100}
                            width={(1920 * 2) / 3}
                            height={(3148 * 2) / 3}
                            sizes="100vw"
                            className="w-[12.845vw]"
                        />
                    </div>
                    <div className="hover:drop-shadow-[20px_10px_0_rgba(242,1,60,1)] w-[18vw] h-[3.125vw] z-1 transition-all duration-340">
                        <Link
                        href={''}
                        className="flex items-center text-center mask-linear-128 mask-linear-from-85% mask-linear-to-85% bg-[#F2013C] w-[19vw] h-[3.125vw] z-1
                        relative overflow-hidden text-white shadow-2xl 
                        transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#050014] 
                        before:transition-all before:duration-340 hover:text-white hover:before:left-0 hover:before:w-full active:before:bg-[#A37188] active:before:transition-none">
                            <p className="absolute w-[85%] text-[2.3vw] group/unit">
                                EXPLORE NOW
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="w-[40vw] h-[53vw] pl-16">
                    <Image
                        src="/assets/hero/mockupBack.png"
                        alt="Mockup Back"
                        quality={100}
                        width={9999999}
                        height={9999999}
                        className="absolute object-contain w-[26.302vw] z-0"
                    />
                    <Image
                        src="/assets/hero/mockupFront.png"
                        alt="Mockup Front"
                        quality={100}
                        width={99999}
                        height={99999}
                        className="absolute object-contain pl-8 pt-24 w-[31vw] h-[43.75vw] z-10 translate-y-[0]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;