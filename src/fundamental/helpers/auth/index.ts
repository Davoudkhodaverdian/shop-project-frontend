import Cookies from 'universal-cookie';

const storeLoginToken = async (token: string, days: number) => {

    // httpOnly way
    // await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ token })
    // })

    // not httpOnly way
    const cookies = new Cookies();
    cookies.set('shop-token', token, {
        path: '/',
        domain: 'localhost',
        // domain: process.env.NODE_ENV === 'development' ? 'localhost' : process.env.NEXT_APP_DOMAIN,
        maxAge: 3600 * 24 * days
    });

}

const removeLoginToken = async () => {
    
    // httpOnly way
    // await fetch('/api/logout', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })

    // not httpOnly way
    const cookies = new Cookies();
    cookies.remove('shop-token');


}


export { storeLoginToken, removeLoginToken }