import { useCart } from "../context/CartContext";
export default function Cart(){
  const { items, remove } = useCart();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">سبد خرید</h2>
      <div className="space-y-4">
        {items.map(i=>(
          <div key={i.id} className="flex items-center justify-between border rounded p-3">
            <div>محصول #{i.product_id}</div>
            <div>تعداد: {i.quantity}</div>
            <button onClick={()=>remove(i.product_id)} className="px-3 py-1 border rounded">حذف</button>
          </div>
        ))}
      </div>
    </div>
  );
}

