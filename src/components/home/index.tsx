import type { NextPage } from 'next';
import Menu from '../menu';
import Slider from '../slider';
import ProductCategory from '../products';
import Layout from '../layout';

const Home: NextPage = () => {


    return (
        <Layout>
            <Menu />
            <Slider />
            <ProductCategory />
        </Layout>

    )
}

export default Home