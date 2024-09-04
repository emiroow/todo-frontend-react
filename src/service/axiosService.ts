import { ILoginResponse } from "@/interfaces/response/ILogin";
import { getHashedLocalStorage } from "@/utils/helpers/hash.helper";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  Method,
} from "axios";
import { toast } from "react-toastify";
import { IAxiosOptions } from "../interfaces/IAxios";
import { IResponse } from "../interfaces/IGlobal";

export const apiService = async <T>({
  method,
  path,
  Option,
}: {
  path: string;
  method: Method;
  Option?: IAxiosOptions<any>;
}): Promise<IResponse<T>> => {
  const axiosInstance = axios.create();
  const token = getHashedLocalStorage<ILoginResponse>("TodoApp").token;
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
    (response: AxiosResponse<IResponse<T>>) => {
      return response;
    },
    (error: AxiosError<IResponse<T>>) => {
      if (error.response) {
        toast.error(error.response.data.massage);
      }
      // net Error
      if (error.code === "ERR_NETWORK") {
        toast.error(error.message);
      }
      return Promise.reject(error.response?.data);
    }
  );

  const response = await axiosInstance.request({
    baseURL: import.meta.env.VITE_BASE_URL,
    method: method,
    url: path,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    ...Option,
  });

  return response.data;
};
