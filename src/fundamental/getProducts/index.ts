import products from '@/components/common/products/products.json';

const getProducts = async (page: string, perPage: string) => {
    const paginatedData = products && products?.slice((Number(page) - 1) * Number(perPage), Number(page) * Number(perPage));
    return paginatedData;
}
export default getProducts
