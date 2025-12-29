import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ onClose }: { onClose: ()=>void }) {
  const { login } = useAuth();
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [loading, setLoading] = useState(false);
  const submit = async () => { setLoading(true); try { await login(email, password); onClose(); } finally { setLoading(false); } };
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-6 rounded">
        <h2 className="text-lg font-bold mb-4">ورود</h2>
        <div className="space-y-3">
          <input className="w-full border rounded p-2" placeholder="ایمیل" value={email} onChange={e=>setEmail(e.target.value)}/>
          <input type="password" className="w-full border rounded p-2" placeholder="رمز عبور" value={password} onChange={e=>setPassword(e.target.value)}/>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-3 py-1">انصراف</button>
            <button onClick={submit} className="px-4 py-1 bg-blue-600 text-white rounded" disabled={loading}>{loading ? "..." : "ورود"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
