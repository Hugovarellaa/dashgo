import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { axios } from "../services/axios/axios";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

const cookies = parseCookies();

type IUser = {
  email: string;
  permissions: string[];
  roles: string[];
};

type signInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: signInCredentials): Promise<void>;
  user: IUser;
  isAuthenticated: boolean;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    if (token) {
      axios.get("/me").then((response) => {
        const { email, permissions, roles } = response.data;
        setUser({ email, permissions, roles });
      });
    }
  }, []);

  async function signIn({ email, password }: signInCredentials) {
    try {
      const response = await axios.post("sessions", {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = response.data;

      setCookie({}, "nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setCookie({}, "nextauth.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser({
        email,
        permissions,
        roles,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const useAuth = () => useContext(AuthContext);
