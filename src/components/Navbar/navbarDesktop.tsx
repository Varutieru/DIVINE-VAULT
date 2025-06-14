"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"

export const navbarDesktop = () => {
    const router = useRouter();
    
    return (
        <div className="w-[97.917vw] mx-auto" style={{ margin: '0 1.042vw' }}>
            <div className="w-full h-full flex justify-between items-center">
                {/* Logo Section */}
                <div className="w-[80px] sm:w-[100px] lg:w-[150px] h-[50px] sm:h-[60px] lg:h-[70px] flex items-center justify-center relative animate-slide-in-above1">
                    <Image
                        src="/assets/navbar/logo-divine-vault.svg"
                        alt="Divine Vault Logo"
                        fill
                        className="object-contain cursor-pointer hover:opacity-80"
                        onClick={() => router.push("/")}
                    />
                </div>
                
                {/* Navigation Links */}
                <div className="hidden md:flex flex-1 max-w-2xl justify-around items-center text-sm lg:text-lg font-semibold text-[#000000] mx-8">
                    <a className="hover:text-[#F2013C] cursor-pointer transition-colors duration-200 font-neoris-medium animate-slide-in-above2" href="/catalogue">
                        CATALOGUE
                    </a>
                    <div className="hover:text-[#F2013C] cursor-pointer transition-colors duration-200 font-neoris-medium animate-slide-in-above3">
                        ABOUT US
                    </div>
                    <div className="hover:text-[#F2013C] cursor-pointer transition-colors duration-200 font-neoris-medium animate-slide-in-above4">
                        CONTACT
                    </div>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                
                {/* Cart and Sign In Section */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-[30px] sm:w-[40px] lg:w-[50px] h-[30px] sm:h-[40px] lg:h-[50px] relative animate-slide-in-above5">
                        <Image
                            src="/assets/navbar/logo-cart.svg"
                            alt="Shopping Cart Icon"
                            fill
                            className="object-contain cursor-pointer hover:opacity-80"
                            onClick={() => router.push("/cart")}
                        />
                    </div>
                    <a className="block w-full h-full" href="/auth/login">
                    <div className="w-[100px] sm:w-[120px] lg:w-[140px] h-[40px] sm:h-[48px] lg:h-[54px] bg-[#000000] flex items-center justify-center text-sm
                        sm:text-base lg:text-lg text-[#ffffff] cursor-pointer hover:bg-gray-800 transition-colors duration-200 font-neotriad animate-slide-in-above6">
                        SIGN IN
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default navbarDesktop;