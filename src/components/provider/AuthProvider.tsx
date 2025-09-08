import type { User } from "@supabase/supabase-js";
import type React from "react";
import { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: User | undefined;
  setAuth: (authUser: User | undefined) => void;
  setUserData: (userData: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setAuth: () => {},
  setUserData: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const setAuth = (authUser: User | undefined) => {
    setUser(authUser);
  };

  const setUserData = (userData: User) => {
    setUser({ ...userData });
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
