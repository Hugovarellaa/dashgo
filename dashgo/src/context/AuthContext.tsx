import { createContext, ReactNode, useContext } from "react";
import { axios } from "../services/axios/axios";

type signInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: signInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({ email, password }: signInCredentials) {
    try {
      const response = await axios.post("sessions", {
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, signIn }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
