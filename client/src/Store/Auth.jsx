import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storetokenInLS = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };
  return (
    <AuthContext.Provider value={{ storetokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
