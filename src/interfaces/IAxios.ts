import { AxiosRequestConfig } from "axios";

export interface IAxiosResult<T> {
  data?: T;
  error?: any;
  loading?: boolean;
}

export interface IAxiosOptions<R> extends AxiosRequestConfig<R> {
  method?: Method;
  useSample?: boolean;
  addToURL?: (string | undefined)[];
}

export interface IDefaultHeaders {
  Authentication: string;
}

export interface IAxiosConfig {
  headers: IDefaultHeaders;
}

type Method =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
  | "LINK"
  | "UNLINK";

export interface IMessageResponse {
  status: boolean;
  message: string;
}

export interface IFileUploadResponse {
  status: boolean;
  path: string;
  fileName: string;
}
