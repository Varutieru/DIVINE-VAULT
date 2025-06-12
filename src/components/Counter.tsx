// components/Counter.tsx
"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  quantity: number;
  setQuantity: (val: number) => void;
}

export default function Counter({ quantity, setQuantity }: CounterProps) {
  return (
    <div className="flex items-center space-x-4 my-6">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        disabled={quantity === 1}
        className="bg-thistle px-3 py-1 rounded border disabled:opacity-50 cursor-pointer"
      >
        -
      </button>
      <span className="text-xl">{quantity}</span>
      <button
        onClick={() => setQuantity(Math.min(10, quantity + 1))}
        disabled={quantity === 10}
        className="bg-thistle px-3 py-1 rounded border disabled:opacity-50 cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
