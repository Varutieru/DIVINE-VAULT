"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"

interface AccordionProps {
    onImageChange: (imageSrc: string) => void;
}

export const Accordion: React.FC<AccordionProps> = ({ onImageChange}) => {

    const [activeArticle, setActiveArticle] = useState<number | null>(null);

    const imageMap = {
        0: "/assets/backgroundAccordion/Archangel/top-layer.svg",
        1: "/assets/backgroundAccordion/Kyouka/top-layer.svg",
        2: "/assets/backgroundAccordion/Suigetsu/top-layer.svg", 
        3: "/assets/backgroundAccordion/Iaido/top-layer.svg"
    };

    const handleArticleClick = (index: number, event: React.MouseEvent) => {
        event.preventDefault();
        
        if (activeArticle === index) {
            setActiveArticle(null);
            onImageChange("/assets/backgroundAccordion/Static/top-layer.svg");
        } else {
            setActiveArticle(index);
            onImageChange(imageMap[index as keyof typeof imageMap]);
        }
    };

    return (
        <div className="absolute flex justify-center items-center w-full z-100">
            <div className="flex flex-row place-items-center-safe justify-center pl-[7vw] pr-[5vw] gap-[5vw]">
                <div className="relative p-[0.625vw] flex flex-col w-[30.938vw] h-[45vh]">
                    <Image
                        src={"/assets/accordion/Static/title.svg"}
                        alt="Title"
                        width={(1920 * 2) / 3}
                        height={(3148 * 2) / 3}
                        sizes="100vw"
                        className="w-full"
                    >
                    </Image>
                </div>
                <div className="group flex justify-center place-items-center-safe w-[45vw] h-[80vh]
                                max-md:flex-col gap-[1.563vw] m-[1vw]">
                    {/* Archangel Article */}
                    <article className={`group/article relative w-full grayscale hover:grayscale-0
                                        shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300
                                        before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t
                                        before:from-black/50 before:transition-opacity before:opacity-0 after:opacity-0
                                        after:absolute after:inset-0 after:transition-all 
                                        ${
                                            activeArticle === 0 ? 'grayscale-0 before:opacity-100' : ''}
                                            ${
                                                activeArticle !== null && activeArticle !== 0 ? 'md:w-[66%] after:opacity-100' : ''
                                            }`
                                        }>
                        <a
                            className="absolute inset-0 text-white z-10" 
                            href="#0"
                            onClick={(e) => handleArticleClick(0, e)}
                        >
                            <span className={`absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap
                                md:truncate transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] 
                                ${activeArticle === 0 ? 'opacity-100 translate-y-0 delay-300' : 'md:opacity-0 md:translate-y-2'}`}>
                            </span>
                        </a>
                        <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/archangel.png" width="960" height="480" alt="Archangel"></img>
                    </article>
                    
                    {/* Kyouka Article */}
                    <article className={`group/article relative w-full grayscale hover:grayscale-0
                                        shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300
                                        before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t
                                        before:from-black/50 before:transition-opacity before:opacity-0 after:opacity-0
                                        after:absolute after:inset-0 after:transition-all
                                        ${
                                            activeArticle === 1 ? 'grayscale-0 before:opacity-100' : ''
                                            } ${
                                                activeArticle !== null && activeArticle !== 1 ? 'md:w-[66%] after:opacity-100' : ''
                                                }`
                                        }>
                        <a 
                            className="absolute inset-0 text-white z-10" 
                            href="#0"
                            onClick={(e) => handleArticleClick(1, e)}
                        >
                            <span className={`absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap
                                md:truncate transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)]
                                ${activeArticle === 1 ? 'opacity-100 translate-y-0 delay-300' : 'md:opacity-0 md:translate-y-2'}`}>
                            </span>
                        </a>                    
                        <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/kyouka.png" width="960" height="480" alt="Kyouka"></img>
                    </article>
                    
                    {/* Suigetsu Article */}
                    <article className={`group/article relative w-full grayscale hover:grayscale-0
                                        shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300
                                        before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t 
                                        before:from-black/50 before:transition-opacity before:opacity-0 after:opacity-0
                                        after:absolute after:inset-0 after:transition-all 
                                        ${
                                            activeArticle === 2 ? 'grayscale-0 before:opacity-100' : ''
                                            } ${
                                                activeArticle !== null && activeArticle !== 2 ? 'md:w-[66%] after:opacity-100' : ''
                                                }`
                                        }>
                        <a 
                            className="absolute inset-0 text-white z-10" 
                            href="#0"
                            onClick={(e) => handleArticleClick(2, e)}
                        >
                            <span className={`absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 md:whitespace-nowrap
                                            md:truncate transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)]
                                ${activeArticle === 2 ? 'opacity-100 translate-y-0 delay-300' : 'md:opacity-0 md:translate-y-2'}`}>
                            </span>
                        </a>                    
                        <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/suigetsu.png" width="960" height="480" alt="Suigetsu"></img>
                    </article>                                
                    
                    {/* Iaido Article */}
                    <article className={`group/article relative w-full grayscale hover:grayscale-0
                                        shadow-[-5px_5px_5px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300
                                        before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t
                                        before:from-black/50 before:transition-opacity before:opacity-0 after:opacity-0
                                        after:absolute after:inset-0 after:transition-all 
                                        ${
                                            activeArticle === 3 ? 'grayscale-0 before:opacity-100' : ''
                                            } ${
                                                activeArticle !== null && activeArticle !== 3 ? 'md:w-[66%] after:opacity-100' : ''
                                                }`
                                        }>
                        <a 
                            className="absolute inset-0 text-white z-10" 
                            href="#0"
                            onClick={(e) => handleArticleClick(3, e)}
                        >
                            <span className={`absolute inset-x-0 bottom-0 text-lg font-medium p-6 md:px-12 md:py-8 
                                md:whitespace-nowrap md:truncate transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)]
                                ${activeArticle === 3 ? 'opacity-100 translate-y-0 delay-300' : 'md:opacity-0 md:translate-y-2'}`}>
                            </span>
                        </a>                    
                        <img className="object-cover h-72 md:h-[480px] md:w-auto" src="/assets/accordion/iaido.png" width="960" height="480" alt="Iaido"></img>
                    </article>                                
                </div>
            </div>
        </div>
    );
}

export default Accordion;