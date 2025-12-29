import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import LoginModal from "./LoginModal";
import React, { useState } from "react";

export default function Navbar(){
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Surin</Link>
        <nav className="flex items-center gap-6">
          <Link to="/catalog" className="hover:text-blue-600">محصولات</Link>
          <Link to="/contact" className="hover:text-blue-600">تماس</Link>
          <Link to="/admin" className="hover:text-blue-600">مدیریت</Link>
          <Link to="/cart" className="relative">
            سبد خرید
            <span className="absolute -top-2 -left-3 bg-blue-600 text-white text-xs px-2 rounded-full">{count}</span>
          </Link>
          <button onClick={()=>setOpen(true)} className="px-3 py-1 rounded bg-blue-600 text-white">ورود</button>
        </nav>
      </div>
      {open && <LoginModal onClose={()=>setOpen(false)} />}
    </header>
  );
}
