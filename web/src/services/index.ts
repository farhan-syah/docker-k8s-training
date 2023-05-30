import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      throw error.request;
    } else {
      throw error;
    }
  }
);

axios.defaults.withCredentials = true;

class _API {
  async get<T>(url: string, config?: AxiosRequestConfig) {
    return (await axios.get<T>(url, config)).data;
  }

  async search<T, R = T>(url: string, data?: T, config?: AxiosRequestConfig) {
    return (await axios.post<T, AxiosResponse<R>>(url, data, config)).data;
  }

  async post<T, R = T>(url: string, data?: T, config?: AxiosRequestConfig) {
    return (await axios.post<T, AxiosResponse<R>>(url, data, config)).data;
  }

  async count<T, R = number>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ) {
    return (await axios.post<T, AxiosResponse<R>>(url, data, config)).data;
  }

  async patch<T, R = T>(url: string, data?: T, config?: AxiosRequestConfig) {
    return (await axios.patch<T, AxiosResponse<R>>(url, data, config)).data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig) {
    return (await axios.delete<T>(url, config)).data;
  }
}

export const API = new _API();
