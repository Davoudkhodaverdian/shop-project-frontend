import React from 'react';
import SliderSweaper from './sliderSweaper';
import Products from './products';

const Home : React.FC = () => {

    console.log("process.env.NODE_ENV:",process.env.NODE_ENV)

    return (
        <div>
            <SliderSweaper/>
            <Products />
        </div>

    )
}

export default Home