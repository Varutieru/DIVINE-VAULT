"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import NavBar from '@/components/Navbar/navbarDesktop';
import Footer from '@/components/Footer';
import { useRouter } from "next/navigation";
import products from '../../data/products';

export default function NotFound() {
  const router = useRouter();

  return (
    <main>
        <div className='bg-magnolia relative overflow-hidden'>
            <NavBar/>
            <section className="relative h-[calc(100vh-200px)] items-center justify-center flex flex-col text-center text-blackRich text-4xl font-neoris-medium">
            <h1> We can't find the page you are looking for.<br/> Sorry for the inconvenience.</h1>
            {/* Button */}
            <div className="relative mt-16 hover:drop-shadow-[20px_10px_0_rgba(242,1,60,1)] w-[18vw] h-[3.125vw] z-1 transition-all duration-340 align-self- cursor-pointer">
                <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="flex items-center text-center bg-[#F2013C] w-[18vw] h-[3.125vw] z-1
                    relative overflow-hidden text-white shadow-2xl 
                    transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#050014] 
                    before:transition-all before:duration-340 hover:text-white hover:before:left-0 hover:before:w-full active:before:bg-[#F2013C] active:before:transition-none">
                    <p className="absolute w-[100%] text-3xl group/unit font-neotriad">
                        BACK TO HOME PAGE
                    </p>
                </button>
            </div>
            </section>
            <section>
                {/* Carousel */}
                <div className="bg-magnolia flex justify-center text-black mb-40">
                    <div className="relative flex w-[70vw] gap-1 justify-between overflow-x-scroll">
                        {/* Products */}
                        {Object.entries(products).map(([key, product], index) => (
                            <article 
                                key={index}
                                className="relative min-w-[300px] overflow-hidden group drop-shadow-lg mb-6"
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
            </section>
            <Footer/>
        </div>
    </main>
  );
}