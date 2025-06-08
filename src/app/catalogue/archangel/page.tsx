"use client";
import React, { useState } from "react";
import Image from "next/image"
import NavBar from "@/components/Navbar/navbarDesktop";

export default function Home() {
  return (
    <main>
      <div className="bg-magnolia relative overflow-hidden">
        <NavBar/>
        {/* Hero */}
        <div className="bg-blackRich flex justify-center items-center w-full h-[50vh]">
            <p className="text-[13.6vw] text-magnolia font-neotriad leading-none drop-shadow-xl">
                ARCHANGEL
            </p>
        </div>
        {/* Carousel */}
        <div className="bg-magnolia flex justify-center text-black mb-24">
            <div className="flex relative flex-row w-[81vw]">
                <article className="bg-thistle relative w-[25%] overflow-hidden group">
                <a className="absolute inset-0 text-white z-10" href="#0"></a>
                {/* Base image (shown by default) */}
                <img
                    src="/assets/mockups/archangelFront.png"
                    alt="Front"
                    width="960"
                    height="480"
                    className="object-cover w-auto group-hover:opacity-0 transition-opacity duration-300"
                />
                {/* Hover image (shown on hover) */}
                <img
                    src="/assets/mockups/archangelBack.png"
                    alt="Back"
                    width="960"
                    height="480"
                    className="object-cover w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="bg-white py-3 px-3 relative z-20">
                    <h2 className="font-neoris text-2xl mb-4">NAMA</h2>
                    <h1 className="text-right font-neoris-bold text-2xl">HARGA</h1>
                </div>
                </article>
            </div>
        </div>
      </div>
    </main>
  );
}
