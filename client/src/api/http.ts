import axios, { AxiosInstance } from "axios";

export const BASE_URL = "http://localhost:3000";

export type Api = {
  base: AxiosInstance;
};

export const Http: Api = {
  base: axios.create({
    baseURL: BASE_URL
  })
};
