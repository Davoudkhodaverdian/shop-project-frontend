import type { NextPage } from 'next';
import Slider from '../slideShow';
import SliderSweaper from '../sliderSweaper';
import ProductCategory from '../products';
import Layout from '../layout';

const Home: NextPage = () => {


    return (
        <Layout>
            {/* <Slider /> */}
            <SliderSweaper/>
            <ProductCategory />
        </Layout>

    )
}

export default Home