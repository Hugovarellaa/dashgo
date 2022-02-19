import Axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();

export const axios = Axios.create({
  baseURL: "http://localhost:3333",
});

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${cookies["nextauth.token"]}`;
