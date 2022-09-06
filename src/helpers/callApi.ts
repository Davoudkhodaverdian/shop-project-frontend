import axios from "axios";
import ValidationError from "../app/exceptions/validationError";

const callApi = ()=> {
    
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/api/',
    
    });
    
    // Add a request interceptor
    axiosInstance.interceptors.request.use((config) => {
        // Do something before request is sent
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    });
    
    // Add a response interceptor
    axiosInstance.interceptors.response.use((response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, (error) => {
        const res = error?.response;
        if (res) {

            if (res.status === 422) {
              throw new ValidationError(res.data.errors)
            }
        }
        Promise.reject(error);
    });

    return axiosInstance;

}


export default callApi;