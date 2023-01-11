import ProductCategory from '../products';
// import Slider from '../slideShow';
import SliderSweaper from '../sliderSweaper';
import React from 'react';

const Home : React.FC = () => {

    return (
        <div>
            {/* <Slider /> */}
            <SliderSweaper/>
            <ProductCategory />
        </div>

    )
}

export default Home