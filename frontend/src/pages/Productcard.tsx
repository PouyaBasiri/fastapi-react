import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { add } = useCart();
  return (
    <div className="bg-white rounded shadow p-3">
      <img src={product.image_url || "/placeholder.png"} className="w-full h-40 object-cover rounded" />
      <div className="mt-3">
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold">{product.price} تومان</span>
          <div className="flex gap-2">
            <button onClick={()=>add(product.id, 1)} className="px-3 py-1 bg-blue-600 text-white rounded">افزودن</button>
            <Link to={`/product/${product.id}`} className="px-3 py-1 border rounded">جزئیات</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
