 import React from "react";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="bg-white rounded shadow p-3">
      <img
        src={product.image_url || "/placeholder.png"}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-3">
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold">{product.price} تومان</span>
          <button
            onClick={() => add(product.id, 1)}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}