import Axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

let cookies = parseCookies();
let isRefresh = false;
let failedRequestQueue = [];

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
        const originalConfig = error.config;

        if (!isRefresh) {
          isRefresh = true;

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

              setCookie(
                {},
                "nextauth.refreshToken",
                response.data.refreshToken,
                {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                }
              );

              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${token}`;

              failedRequestQueue.forEach((request) => request.onSucess(token));
              failedRequestQueue = [];
            })
            .catch((err) => {
              failedRequestQueue.forEach((request) => request.onFailure(err));
              failedRequestQueue = [];
            })
            .finally(() => {
              isRefresh = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSucess: (token: string) => {
              if (originalConfig.headers) {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;
                resolve(axios(originalConfig));
              }
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
    } else {
      //deslogar o usuario
    }
  }
);
