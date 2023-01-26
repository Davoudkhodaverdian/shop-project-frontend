import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../helpers/callApi";

const cookies = new Cookies();

const useAuth = () => {

    const { data, error,mutate } = useSWR('user-auth', () => {
        // httpOnly way
        
        return callApi().get('/user')

        // not httpOnly way
        // return callApi().get('/user', {
        //     headers: {
        //         authorization: cookies.get('shop-token')
        //     }
        // })
    })

    if (error) console.log(error);
    
    return { user: data?.data?.user, error, loading: !data && !error,mutate }

}


export default useAuth;