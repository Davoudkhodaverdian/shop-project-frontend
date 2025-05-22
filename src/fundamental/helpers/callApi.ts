import axios, { AxiosInstance } from "axios";

const callApi = () => {

    const axiosInstance: AxiosInstance = axios.create({
        // baseURL: process.env.NODE_ENV === 'development' ? "http://localhost:2381/api" : process.env.NEXT_APP_API,
        baseURL: 'https://shop-project-tawny.vercel.app/api',
        // baseURL: 'http://localhost:3000/api',
    });

    // Add a request interceptor
    axiosInstance.interceptors.request.use((config) => {
        // Do something before request is sent
        config.withCredentials = true // for httpOnly
        return config;
    }, (error) => {
        // Do something with request error
        throw error?.response?.data;
    });

    // Add a response interceptor
    axiosInstance.interceptors.response.use((response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, (error) => {
        // console.log(error?.response?.data);
        throw error?.response?.data;
    });

    return axiosInstance;

}


export default callApi;