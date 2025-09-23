import { createContext } from "react";
import { useState } from "react";
import { getUser } from "../../services/StorageService";

export const AuthContext = createContext();  


export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(getUser());

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};