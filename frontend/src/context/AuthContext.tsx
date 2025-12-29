import React, { createContext, useContext, useState } from "react";
import { api } from "../lib/axios";

type Auth = { token: string | null; login: (email: string, password: string) => Promise<void>; logout: () => void; };
const AuthContext = createContext<Auth>({ token: null, login: async()=>{}, logout: ()=>{} });

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.access_token);
    setToken(res.data.access_token);
  };
  const logout = () => { localStorage.removeItem("token"); setToken(null); };
  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);

