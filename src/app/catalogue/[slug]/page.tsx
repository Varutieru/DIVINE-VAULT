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
      <div className="bg-magnolia flex justify-center text-black mt-12 mb-24">
        <div className="flex flex-row">
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
            <div className="pl-16">
                <h1>{product.productName}</h1>
                <p>Select Size:</p>
                <button className="border">pura-puranya tombol2 pilih size</button>
                <p>Ukuran: Unisex XXXXXL</p>
                <h1>{product.productPrice}</h1>
                <p>Limited Store Dibuat dari Bahan Bukan Daur Ulang</p>
                <button className="border">pura-puranya tombol2 pilih banyak yg mau dibeli</button>
                <p>Stok tersedia</p>
                <button className="border">Tambahkan ke keranjang</button>
            </div>
        </div>
      </div>
    </div>
  );
}