"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const router = useRouter();

    const quickLinks = [
    { text: "Catalogue", href: "#0"},
    { text: "About Us", href: "#0"},
    { text: "Contact", href: "#0"},
    ];

    const socialLinks = [
    { text: "Instagram", href: "#0"},
    { text: "TikTok", href: "#0"},
    { text: "Twitter", href: "#0"},
    { text: "Facebook", href: "#0"},
    ];

    return(
    <footer className="bg-munsellRed text-white w-full pb-[1vh] z-[10]">
      <div className="mx-[5vw] py-[5vh] flex flex-row w-fill justify-between">
        {/* Logo Section */}
        <div className="h-fill flex items-center">
            <div className="w-[21.997vw] h-[8.634vw] relative">
                <Image
                    src="/assets/misc/logoFooter.svg"
                    alt="Divine Vault Logo"
                    fill
                    className="object-contain cursor-pointer"
                    onClick={() => router.push("/")}
                />
            </div>
        </div>
        {/* Section Kanan */}
        <div className="flex flex-row w-[32vw] justify-between 2xl:text-2xl">
            {/* Kolom */}
            <div className="flex-col">
                <h1 className="font-bold pb-1">Quick Links</h1>
                <ul>
                  {quickLinks.map((quickLink, index) => (
                    <li
                      key={index}
                      className="text-xs 2xl:text-xl font-neoris-regular"
                    >
                      <Link
                        className="hover:text-yellow font-PlusJakartaSans"
                        href={quickLink.href}
                      >
                        {quickLink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
            {/* Kolom */}
            <div className="flex-col">
                <h1 className="font-bold pb-1">Find Us</h1>
                <ul>
                  {socialLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-xs 2xl:text-xl font-neoris-regular"
                    >
                      <Link
                        className="hover:text-yellow font-PlusJakartaSans"
                        href={link.href}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
            {/* Kolom */}
            <div className="flex-col">
                <h1 className="font-bold pb-1">Contact Us</h1>
                <p className="text-xs 2xl:text-xl">
                  <Link
                    href="mailto:divinevault@gmail.com"
                    target="_blank"
                    className="hover:text-yellow"
                  >
                    divinevault@gmail.com
                  </Link>
                </p>
            </div>
        </div>
      </div>
      <div className="copyright flex justify-center">
        <span className="text-xs">
          © DIVINE VAULT 2025. All rights reserved.
        </span>
      </div>
    </footer>
    );
}