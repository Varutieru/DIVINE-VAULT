"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"

export const Hero = () => {
    return (
        <div className="w-full mt-[5vw] z-100">
            <div className="flex flex-row pl-[9.271vw] gap-18">
                <div className="text-black h-[600px] w-[49.635vw]">
                    <Image
                        src="/assets/hero/squareStriped.svg"
                        alt="Background"
                        quality={100}
                        width={(1920 * 2) / 3}
                        height={(3148 * 2) / 3}
                        sizes="100vw"
                        className="w-[10%] mb-8"
                    />
                    <div className="items-center text-black mb-4">
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
                    <div className="text-black text-7xl mb-4">
                        THE DIVINED APPARELS
                    </div>
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
                    <div className="flex items-center text-center mask-linear-135 mask-linear-from-85% mask-linear-to-85% bg-[#F2013C] w-[18vw] h-[3.125vw]">
                        <div className="w-[85%] text-white text-3xl">EXPLORE NOW</div>
                    </div>
                </div>
                <div className="bg-black">
                    <Image
                        src="/assets/hero/mockupBack.png"
                        alt="Background"
                        quality={100}
                        width={(1920 * 2) / 3}
                        height={(3148 * 2) / 3}
                        sizes="100vw"
                        className="absolute w-auto"
                    />
                    <Image
                        src="/assets/hero/mockupFront.png"
                        alt="Background"
                        quality={100}
                        width={(1920 * 2) / 3}
                        height={(3148 * 2) / 3}
                        sizes="100vw"
                        className="absolute w-auto translate-[5.208vw]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;