import axios from "axios";
import Cookies from "js-cookie";

const axRef = axios.create({
  baseURL: process.env.NEXT_PUBLIC_METAXOT_API,
  timeout: 5000,
});

axRef.interceptors.request.use(
  config => {
    const token = Cookies.get("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject({
      status: error.response.data.status,
      message: error.response.data.messag,
    });
  }
);

axRef.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      Cookies.remove("token");
      localStorage.removeItem("userData");
    }

    return Promise.reject(error);
  }
);

export default axRef;
