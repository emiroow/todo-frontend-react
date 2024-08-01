import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  Method,
} from "axios";
import { IAxiosOptions } from "../interfaces/IAxios";

export const apiService = async ({
  method,
  path,
  Option,
}: {
  path: string;
  method: Method;
  Option?: IAxiosOptions<any>;
}) => {
  const axiosInstance = axios.create();

  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      console.log(error);
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized, logging out...");
      }
      return Promise.reject(error);
    }
  );

  const response = await axiosInstance.request({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    method: method,
    url: path,
    ...Option,
  });

  return response.data;
};
