import React from 'react';
import SliderSweaper from './sliderSweaper';
import Products from './products';

const Home : React.FC = () => {

    console.log("process.env.NODE_ENV:",process.env.NODE_ENV)
    console.log("process.env.NEXT_APP_DOMAIN",process.env.NEXT_APP_DOMAIN)

    return (
        <div>
            <SliderSweaper/>
            <Products />
        </div>

    )
}

export default Home