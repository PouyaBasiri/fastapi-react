import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { useCart } from "../context/CartContext";

export default function ProductDetail(){
  const { id } = useParams(); const [p, setP] = useState<any>(null);
  const { add } = useCart();
  useEffect(()=>{ api.get(`/products/${id}`).then(r=>setP(r.data)); },[id]);
  if(!p) return <div className="p-6">در حال بارگذاری...</div>;
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      <img src={p.image_url || "/placeholder.png"} className="w-full rounded"/>
      <div>
        <h1 className="text-2xl font-bold mb-2">{p.title}</h1>
        <p className="text-gray-700 mb-4">{p.description}</p>
        <div className="font-bold mb-6">{p.price} تومان</div>
        <button onClick={()=>add(p.id, 1)} className="px-4 py-2 bg-blue-600 text-white rounded">افزودن به سبد</button>
        {/* Reviews section (static placeholder) */}
        <div className="mt-8">
          <h3 className="font-bold mb-2">نظرات</h3>
          <p className="text-sm text-gray-600">به زودی...</p>
        </div>
      </div>
    </div>
  );
}
