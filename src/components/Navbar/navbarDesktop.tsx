"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"

export const navbarDesktop = () =>{
    return (
        <div className="w-full h-full flex justify-between">
            <div className="w-[10.417vw] h-[9.259vh] flex items-center justify-center">
                <Image
                    src="/assets/navbar/logo-divine-vault.png"
                    alt="Divine Vault Logo"
                    width={191}
                    height={42}
                />
            </div>
            <div className="w-[62.5vw] h-[9.259vh] flex items-center justify-center">
                <ul className="flex justify-between text-lg font-semibold text-[#000000]">
                    <li className="hover:text-[#F2013C] cursor-pointer">CATALOGUE</li>
                    <li className="hover:text-[#F2013C] cursor-pointer">ABOUT US</li>
                    <li className="hover:text-[#F2013C] cursor-pointer">CONTACT</li>
                </ul>
            </div>
            <div className="w-[10.417vw] h-[9.259vh] flex items-center justify-center">
                <Image
                    src="/assets/navbar/logo-cart.png"
                    alt="Shopping Cart Icon"
                    width={30}
                    height={30}
                    className="cursor-pointer hover:opacity-80"
                />
                <div className="w-[140px] h-[54px] bg-[#000000] relative flex items-center justify-center text-[#ffffff]">SIGN IN
                </div>
            </div>
        </div>
    );
}

export default navbarDesktop;