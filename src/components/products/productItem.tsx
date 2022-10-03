
import React from "react"
import Product from "../models/Product";
import Link from 'next/link';

interface Props {
    item: Product
}


const ProductItem: React.FC<Props> = ({ item }) => {


    return (
      
            <div className="shadow border border-gray-300 p-2 m-2 rounded">
                <div>
                    <img src={`/images/products/${item.ProductImage}`} alt="" className="max-h-[500px] my-2" />
                </div>
                <div>{item.ProductName}</div>
                <div>
                    <Link href={`/detailsProducts?slug=${item.slug}`} >
                        <a className="block p-2 m-3 rounded-sm text-white text-center bg-violet-500 drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">
                            جزئیات بیشتر
                        </a>
                    </Link>
                </div>
            </div>

   
    )

}

export default ProductItem;