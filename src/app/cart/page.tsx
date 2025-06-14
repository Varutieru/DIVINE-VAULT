import Image from "next/image";
import products from "../../../data/products";
import NavBar from "@/components/Navbar/navbarDesktop";
import Footer from "@/components/Footer";
import NotFound from "@/app/not-found";
import ProductSidebar from "@/components/ProductPage/sidebar";

export default function Cart() {
  return (
    <div className="bg-magnolia relative">
      <NavBar />
      <div className="bg-magnolia flex flex-col justify-center text-black mt-4">
        {/* Cart Showing */}
        <div className="flex relative justify-center flex-row mb-24">
            {/* Products */}
            <div className="bg-white relative grid grid-cols-2 w-[50vw] justify-between pt-8">
                <h1 className="font-neoris text-2xl mb-4">Bag</h1>
            </div>
            {/* Checkout Sidebar */}
            <div className="sticky top-0 h-fit w-[20vw] mx-8 pt-8">
                <h1 className="font-neoris text-2xl mb-6">Summary</h1>

                <div className="mb-8 flex flex-col gap-2">
                    <div className="w-full flex flex-row justify-between">
                        <p>Subtotal</p>
                        <p>—</p>
                    </div>
                    
                    <div className="w-full flex flex-row justify-between">
                        <p>Estimated Delivery & Handling</p>
                        <p>Free</p>
                    </div>
                    
                    <div className="w-full flex flex-row justify-between">
                        <p>Estimated Duties and Taxes</p>
                        <p>—</p>
                    </div>
                </div>
                

                <div className="w-full flex flex-row justify-between font-neoris-bold text-3xl">
                    <p>Total</p>
                    <p>—</p>
                </div>

                <button className="bg-black active:bg-mountbattenPink w-full text-white border rounded-full mt-16 p-2 cursor-pointer">
                    CHECKOUT
                </button>
            </div>
        </div>
        {/* People also bought */}
        <section>
            {/* Header */}
            <div className="bg-magnolia flex justify-center items-center w-full py-8">
                <p className="text-6xl text-blackRich font-neotriad leading-none drop-shadow">
                    People also bought
                </p>
            </div>
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
      </div>
      <Footer/>
    </div>
  );
}