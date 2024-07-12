import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storetokenInLS = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };

  let isLoggedIn = !!token;
  console.log(isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storetokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
