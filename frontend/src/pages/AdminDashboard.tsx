import { useEffect, useState } from "react";
import { api } from "../lib/axios";
export default function AdminDashboard(){
  const [products, setProducts] = useState<any[]>([]);
  const load = async()=>{ const r = await api.get("/products"); setProducts(r.data); };
  useEffect(()=>{ load(); },[]);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">مدیریت محصولات</h2>
      <table className="w-full border">
        <thead><tr><th>عنوان</th><th>قیمت</th><th>موجودی</th></tr></thead>
        <tbody>
          {products.map(p=> <tr key={p.id}><td>{p.title}</td><td>{p.price}</td><td>{p.stock}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}

