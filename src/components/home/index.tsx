import ProductCategory from '../products';
import Layout from '../layout';
// import Slider from '../slideShow';
import SliderSweaper from '../sliderSweaper';
import React from 'react';

const Home: React.FC = () => {


    return (
        <Layout>
            {/* <Slider /> */}
            <SliderSweaper/>
            <ProductCategory />
        </Layout>

    )
}

export default Home