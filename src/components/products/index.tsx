
import React, { useState } from "react"
import Category from "../models/category";
import Product from "../models/Product";
import Categories from './categories.json';
import ProductItem from "./productItem";
import ProductsData from './products.json';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Products: React.FC = () => {

    const router = useRouter()
    const { slug } = router.query
    const id = Categories.find((item: Category) => (item.slug == slug))?.CategoryID;
    const byId = (item: Product) => (!id ? true : item.ProductCategoryID === Number(id));
    return (
        <>
            <div className="md:flex w-full">
                <div className="m-5 shadow border border-gray-300 rounded md:w-1/4 h-fit">
                    <div className="p-3 border-b border-gray-300 rounded-tr rounded-tl">دسته بندی محصولات</div>
                    <div className="">
                        {Categories.map((item: Category) => (
                            <Link href={`?slug=${item.slug}`} key={item.CategoryID}>
                                <div className={`${id && Number(id) === item.CategoryID && "bg-purple-400"} p-3 hover:bg-purple-500 active:bg-purple-600 cursor-pointer transition-all border-b border-gray-300`}>
                                    <a>{item.CategoryName}</a>
                                </div>
                            </Link>
                        ))}
                        <Link href={``}>
                            <div className={`${!id && "bg-purple-400"} p-3 hover:bg-purple-500 active:bg-purple-600 cursor-pointer transition-all rounded-br rounded-bl`}>
                                <a>همه</a>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=" md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {ProductsData.filter(byId).map((item: Product) => (<ProductItem key={item.ProductID} item={item} />))}
                    </div>
                </div>

            </div>
        </>
    )

}

export default Products;