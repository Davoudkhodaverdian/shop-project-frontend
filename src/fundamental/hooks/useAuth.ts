import useSWR from "swr";
import callApi from "../helpers/callApi";

const useAuth = () => {

    const { data, error, mutate } = useSWR('user-auth', () => {

        // httpOnly way
        return callApi().get('/auth/user')

        // not httpOnly way
        // return callApi().get('/user', {
        //     headers: {
        //         authorization: cookies.get('SHPTN')
        //     }
        // })
    })

    if (error?.response?.status !== 403 && (data || error)) {
        // console.log(error);
    }

    return { user: data?.data?.response?.user, error, loading: !data && !error, mutate }

}


export default useAuth;