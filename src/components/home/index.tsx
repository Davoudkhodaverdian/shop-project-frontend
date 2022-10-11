import type { NextPage } from 'next';
import Slider from '../slider';
import ProductCategory from '../products';
import Layout from '../layout';

const Home: NextPage = () => {


    return (
        <Layout>
            <Slider />
            <ProductCategory />
        </Layout>

    )
}

export default Home