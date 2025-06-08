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
        <div className="bg-thistle flex justify-center items-center w-full h-[50vh]">
            <p className="text-[13.6vw] text-magnolia font-neotriad leading-none drop-shadow-xl">
                CATALOGUE
            </p>
        </div>
        {/* Our Designs */}
        <div className="bg-magnolia flex justify-center items-center w-full py-8">
            <p className="text-8xl text-blackRich font-neotriad leading-none drop-shadow">
                T-SHIRTS
            </p>
        </div>
        {/* Carousel */}
        <div className="bg-magnolia flex justify-center text-black mb-24">
            <div className="flex relative flex-row w-[81vw] gap-1">
                {/* shirt */}
                <article className="bg-thistle relative w-[25%] overflow-hidden group drop-shadow-lg">
                    <a href="/catalogue/archangel" className="block w-full h-full">
                        <div className="relative">
                        {/* Base image */}
                        <img
                            src="/assets/mockups/archangelFront.png"
                            alt="Front"
                            width="960"
                            height="480"
                            className="object-cover w-auto group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover image */}
                        <img
                            src="/assets/mockups/archangelBack.png"
                            alt="Back"
                            width="960"
                            height="480"
                            className="object-cover w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        </div>
                        <div className="bg-white py-3 px-3">
                        <h2 className="font-neoris text-2xl mb-4">NAMA</h2>
                        <h1 className="text-right font-neoris-bold text-2xl">HARGA</h1>
                        </div>
                    </a>
                </article>
                {/* shirt */}
                <article className="bg-thistle relative w-[25%] overflow-hidden group drop-shadow-lg">
                    <a href="/catalogue/" className="block w-full h-full">
                        <div className="relative">
                        {/* Base image */}
                        <img
                            src="/assets/mockups/archangelFront.png"
                            alt="Front"
                            width="960"
                            height="480"
                            className="object-cover w-auto group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover image */}
                        <img
                            src="/assets/mockups/archangelBack.png"
                            alt="Back"
                            width="960"
                            height="480"
                            className="object-cover w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        </div>
                        <div className="bg-white py-3 px-3">
                        <h2 className="font-neoris text-2xl mb-4">NAMA</h2>
                        <h1 className="text-right font-neoris-bold text-2xl">HARGA</h1>
                        </div>
                    </a>
                </article>
                {/* shirt */}
                <article className="bg-thistle relative w-[25%] overflow-hidden group drop-shadow-lg">
                    <a href="/catalogue/" className="block w-full h-full">
                        <div className="relative">
                        {/* Base image */}
                        <img
                            src="/assets/mockups/archangelFront.png"
                            alt="Front"
                            width="960"
                            height="480"
                            className="object-cover w-auto group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover image */}
                        <img
                            src="/assets/mockups/archangelBack.png"
                            alt="Back"
                            width="960"
                            height="480"
                            className="object-cover w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        </div>
                        <div className="bg-white py-3 px-3">
                        <h2 className="font-neoris text-2xl mb-4">NAMA</h2>
                        <h1 className="text-right font-neoris-bold text-2xl">HARGA</h1>
                        </div>
                    </a>
                </article>
                {/* shirt */}
                <article className="bg-thistle relative w-[25%] overflow-hidden group drop-shadow-lg">
                    <a href="/catalogue/" className="block w-full h-full">
                        <div className="relative">
                        {/* Base image */}
                        <img
                            src="/assets/mockups/archangelFront.png"
                            alt="Front"
                            width="960"
                            height="480"
                            className="object-cover w-auto group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover image */}
                        <img
                            src="/assets/mockups/archangelBack.png"
                            alt="Back"
                            width="960"
                            height="480"
                            className="object-cover w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        </div>
                        <div className="bg-white py-3 px-3">
                        <h2 className="font-neoris text-2xl mb-4">NAMA</h2>
                        <h1 className="text-right font-neoris-bold text-2xl">HARGA</h1>
                        </div>
                    </a>
                </article>
            </div>
        </div>
      </div>
    </main>
  );
}
