import axios from "axios";
import { API_KEY } from "./constants";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 20000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.removeItem(API_KEY);
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
