import Axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

let cookies = parseCookies();

export const axios = Axios.create({
  baseURL: "http://localhost:3333",
});

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${cookies["nextauth.token"]}`;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      if (error.response.data?.code === "token.expired") {
        //renovar o token
        cookies = parseCookies();
        const { "nextauth.refreshToken": refreshToken } = cookies;
        axios
          .post("/refresh", {
            refreshToken,
          })
          .then((response) => {
            const { token } = response.data;

            setCookie({}, "nextauth.token", token, {
              maxAge: 60 * 60 * 24 * 30, // 30 days
              path: "/",
            });
            setCookie({}, "nextauth.refreshToken", response.data.refreshToken, {
              maxAge: 60 * 60 * 24 * 30, // 30 days
              path: "/",
            });

            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          });
      } else {
        //deslogar o usuario
      }
    }
  }
);
