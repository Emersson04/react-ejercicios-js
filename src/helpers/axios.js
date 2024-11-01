import axios from "axios";

export const AxiosCliente = axios.create({
  baseURL: "http://localhost:3000/user/",
});
