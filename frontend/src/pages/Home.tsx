import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";
import { api } from "../lib/axios";
export default function Home(){
  const [products, setProducts] = useState<any[]>([]);
  useEffect(()=>{ api.get<any[]>("/products").then(r=>setProducts(r.data.slice(0,8))); },[]);
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-6">محصولات منتخب</h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {products.map(p=> <ProductCard key={p.id} product={p}/>)}
        </div>
      </section>
    </div>
  );
}

