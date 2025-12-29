import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

type Item = { id: number; product_id: number; quantity: number };
type Cart = { items: Item[]; add: (pid: number, qty?: number)=>Promise<void>; remove: (pid: number)=>Promise<void>; count: number };

const CartContext = createContext<Cart>({ items: [], add: async()=>{}, remove: async()=>{}, count: 0 });

export const CartProvider: React.FC<{children: React.ReactNode, userId?: number}> = ({ children, userId = 1 }) => {
  const [items, setItems] = useState<Item[]>([]);
  const refresh = async () => {
    const res = await api.get<Item[]>(`/cart?user_id=${userId}`).then((res) => {
  setItems(res.data);
});
  };
  useEffect(()=>{ refresh(); },[]);
  const add = async (pid: number, qty: number = 1) => { await api.post(`/cart/add?user_id=${userId}`, { product_id: pid, quantity: qty }); await refresh(); };
  const remove = async (pid: number) => { await api.post(`/cart/remove?user_id=${userId}&product_id=${pid}`); await refresh(); };
  return <CartContext.Provider value={{ items, add, remove, count: items.reduce((a,b)=>a+b.quantity,0) }}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);
