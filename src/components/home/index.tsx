
import React from 'react';
import SliderSweaper from './sliderSweaper';
import Product from '@/fundamental/models/product';
import Products from '@/components/common/products';

const Home: React.FC<{ products: Product[] }> = ({ products }) => {

    console.log(products)
    return (
        <main>
            <SliderSweaper />
            <Products products={products} />
        </main>
    )
}

export default Home