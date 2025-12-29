import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import ProductCard from "../components/ProductCard";

export default function Catalog(){
  const [products, setProducts] = useState<any[]>([]);
  const [q, setQ] = useState(""); const [category, setCategory] = useState("");
  const search = async () => {
    const r = await api.get("/products", { params: { q, category } });
    setProducts(r.data);
  };
  useEffect(()=>{ search(); },[]);
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex gap-3 mb-4">
        <input className="border p-2 rounded" placeholder="جستجو" value={q} onChange={e=>setQ(e.target.value)} />
        <input className="border p-2 rounded" placeholder="دسته‌بندی" value={category} onChange={e=>setCategory(e.target.value)} />
        <button onClick={search} className="px-3 py-2 bg-blue-600 text-white rounded">اعمال</button>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.map(p=> <ProductCard key={p.id} product={p}/>)}
      </div>
    </div>
  );
}
 
