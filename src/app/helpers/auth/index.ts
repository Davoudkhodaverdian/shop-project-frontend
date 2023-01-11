import Cookies from 'universal-cookie';

const storeLoginToken = (taken: string, days: number) => {

    const cookies = new Cookies();
    cookies.set('shop-token', taken, {
        path: '/',
        domain: process.env.NODE_ENV === 'development' ? 'localhost' : process.env.REACT_APP_DOMAIN,
        maxAge: 3600 * 24 * days
    });

}

const removeLoginToken = () => {


}


export { storeLoginToken, removeLoginToken }