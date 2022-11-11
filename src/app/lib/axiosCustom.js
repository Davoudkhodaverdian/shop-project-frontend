import axios from "axios";
import { errorMessage } from "../utilities/notifications";

const costumAxios = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
})

// Add a request interceptor
costumAxios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
costumAxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  if (!error?.response?.status || error?.response?.status === 0) {
    errorMessage(<span className="font-vazirmatn">ارتباط با سرور برقرار نیست</span>);
  } else if (error?.response?.status === 401) {
    errorMessage(<span className="font-vazirmatn">شما اجازه دسترسی به این بخش را ندارید</span>);
  }

  return Promise.reject(error);
});

export default costumAxios;