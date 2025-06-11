"use client";
import React, { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import NavBar from "@/components/Navbar/navbarDesktop";
import products from "../../../data/products";

export default function Home() {
  return (
    <main>
      <div className="bg-magnolia relative overflow-hidden">
        <NavBar/>
        {/* Hero */}
        <div className="bg-thistle flex justify-center items-center w-full h-[44vh]">
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
        <div className="bg-magnolia flex justify-center text-black mb-40">
            <div className="relative grid grid-cols-4 w-[81vw] gap-1 justify-between">
                {/* Products */}
                {Object.entries(products).map(([key, product], index) => (
                    <article 
                        key={index}
                        className="relative overflow-hidden group drop-shadow-lg mb-6"
                    >
                        <a href={product.href} className="block w-full h-full">
                            <div className="relative">
                            {/* Base image */}
                            <img
                                src={product.mockupStatic}
                                alt="Front"
                                width="960"
                                height="480"
                                className="bg-thistle object-cover w-auto group-hover:opacity-0 transition-opacity duration-300"
                            />
                            {/* Hover image */}
                            <img
                                src={product.mockupHover}
                                alt="Back"
                                width="960"
                                height="480"
                                className="bg-thistle object-cover w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            </div>
                            <div className="bg-white py-3 px-3">
                            <h2 className="font-neoris text-xl mb-4">{product.productName}</h2>
                            <h1 className="text-right font-neoris-bold text-2xl">{product.productPrice}</h1>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </div>
        <div className="h-[20vw]">
            <Image
                src={"/assets/misc/statue.png"}
                alt="Description"
                width={(1920 * 2) / 3}
                height={(3148 * 2) / 3}
                sizes="100vw"
                className="scale-75 -rotate-25 -translate-x-[12vw] -translate-[35vh]"
            >
            </Image>
        </div>
      </div>
      <div className="bg-black flex justify-center items-center w-full h-[50vh]">
            <p className="text-[13.6vw] text-magnolia font-neotriad leading-none drop-shadow-xl">
                pura-puranya ini footer
            </p>
      </div>
    </main>
  );
}
