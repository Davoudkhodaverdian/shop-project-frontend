import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../helpers/callApi";

const cookie = new Cookies();

const useAuth = () => {
    const { data, error } = useSWR('user-auth', () => {
        return callApi().get('/user', {
            headers: {
                authorization: cookie.get('shop-token')
            }

        })
    })

    if (error) console.log(error);

    return { user: data?.data?.user, error, loading: !data && !error }

}


export default useAuth;