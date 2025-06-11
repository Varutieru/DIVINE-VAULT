import Image from "next/image";
import products from "../../../../data/products";
import NavBar from "@/components/Navbar/navbarDesktop";

type ProductSlug = keyof typeof products;

interface ProductPageProps {
  params: {
    slug: ProductSlug;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = products[slug];

  if (!product) {
    return null;
  }

  return (
    <div className="bg-magnolia relative overflow-hidden">
      <NavBar />
      <div className="bg-magnolia flex flex-col justify-center text-black mt-12">
        {/* Product Showing */}
        <div className="flex justify-center flex-row mb-24">
            {/* Images */}
            <div className="relative grid grid-cols-2 w-[40vw] justify-between">
                {Object.entries(product.mockups).map(([key, mockup], index) => (
                    <article 
                        key={index}
                        className="relative overflow-hidden"
                    >
                            <div className="relative">
                            {/* image */}
                            <img
                                src={mockup}
                                alt="mockup"
                                width="960"
                                height="480"
                                className="bg-thistle object-cover w-auto"
                            />
                            </div>
                    </article>
                ))}
            </div>
            {/* Sidebar */}
            <div className="pl-16 w-[27vw]">
                <h1 className="font-neoris text-xl mb-4">{product.productName}</h1>
                <p>Select Size:</p>
                <button className="bg-thistle border text-2xl">pura-puranya tombol2 pilih size</button>
                <p className="mb-12">Ukuran: Unisex XXXXXL</p>
                <h1 className="font-neoris-bold text-2xl">{product.productPrice}</h1>
                <p className="mb-6">Limited Store Dibuat dari Bahan Bukan Daur Ulang</p>
                <button className="bg-thistle border w-[50%]">pura-puranya tombol2 pilih banyak yg mau dibeli</button>
                <p>Stok tersedia</p>
                <button className="bg-black w-full text-white border mt-16 p-2">Tambahkan ke keranjang</button>
                <p className="mt-16">{product.description}</p>
            </div>
        </div>
        {/* Our Other Products */}
        {/* Header */}
        <div className="bg-magnolia flex justify-center items-center w-full py-8">
            <p className="text-8xl text-blackRich font-neotriad leading-none drop-shadow">
                Our Other Products:
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
      </div>
      <div className="bg-black flex justify-center items-center w-full h-[50vh]">
          <p className="text-[13.6vw] text-magnolia font-neotriad leading-none drop-shadow-xl">
            pura-puranya ini footer
          </p>
      </div>
    </div>
  );
}