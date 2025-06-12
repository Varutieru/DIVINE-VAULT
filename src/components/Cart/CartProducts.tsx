"use client";

import { useState } from "react";
import Counter from "../Counter";

// interface ProductSidebarProps {
//   productName: string;
//   productPrice: string; // string like "Rp85.000"
//   description: string;
// }

export default function ProductSidebar({ productName, productPrice, description }: ProductSidebarProps) {
  const [quantity, setQuantity] = useState(1);

  // Extract numeric price value
  const numericPrice = parseInt(productPrice.replace(/[^\d]/g, ""), 10);
  const total = numericPrice * quantity;

  // Format back to currency
  const formattedTotal = `Rp${total.toLocaleString("id-ID")}`;

  return (
    <div className="sticky top-0 h-fit w-[27vw] mx-8 px-8 pt-8">
      <h1 className="font-neoris text-xl mb-4">{productName}</h1>
      <p>Select Size:</p>
      <button className="bg-thistle active:bg-mountbattenPink border text-2xl cursor-pointer">
        pura-puranya tombol2 pilih size
      </button>
      <p className="mb-12">Ukuran: Unisex XXXXXL</p>
      
      <h1 className="font-neoris-bold text-3xl">{formattedTotal}</h1>
      <p className="mb-6">Limited Store Dibuat dari Bahan Bukan Daur Ulang</p>

      <Counter quantity={quantity} setQuantity={setQuantity} />

      <p>Stok tersedia</p>
      <button className="bg-black active:bg-mountbattenPink w-full text-white border mt-16 p-2 cursor-pointer">
        Tambahkan ke keranjang
      </button>

      <p className="mt-16">{description}</p>
    </div>
  );
}