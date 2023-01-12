import axios from './axiosCustom'
import qs from "qs";

export function getStrapiUrl(path = "") {
    // console.log(process.env)
    // return `${process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : process.env.NEXT_APP_STRAPI_API}${path}`;
    return `https://strapi-shop-app.davoudkhtechone.ir${path}`;
}

export async function axiosAPI(path, method, urlParamsObject = {}, requestData = null, options = {}) {

    const queryString = qs.stringify(urlParamsObject)
    const url = `${getStrapiUrl(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;

    const { data, status, statusText } = await axios({ method, url, data: requestData }, options);

    if (!status || status !== 200 || status === 0) {

        throw new Error(`An error occured please try again`)
    }

    return data
}