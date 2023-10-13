import axios from "axios";
import store from "Store/Store";

const BaseUrl = "http://192.168.1.60:3005/"; // enter your IP address

const Api = axios.create({
  timeout: 1000000,
  baseURL: BaseUrl,
});

Api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
Api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

Api.interceptors.request.use(
  (config) => {
    if (store?.getState()?.userSlice?.token) {
      const token = `Bearer ${store?.getState()?.userSlice?.token}`;
      config.headers = {
        Authorization: token,
      };
    }
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

// Add a response interceptor
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
