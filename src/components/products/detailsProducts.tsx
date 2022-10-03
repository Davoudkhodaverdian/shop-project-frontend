
import React, { useState } from "react";
import Product from "../models/Product";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Layout from "../layout";
import { removeShoppingBag } from "../../app/store/shoppingBagSlice";
import Buymanager from "./buymanager";
interface Props {
    item: Product
}
const DetailsProducts: React.FC<Props> = ({ item }) => {


    const shoppingBag = useAppSelector((state) => state.shoppingBag);
    const [picked, setPicked] = useState(!!shoppingBag.find(i => i.ProductID === item.ProductID));
    const dispitch = useAppDispatch();
    const HandleShoppingBag = () => {
        if (picked) {
           // dispitch(removeShoppingBag(item.id));
        }
    }

    return (
        <Layout>
            <div className="shadow border border-gray-300 p-10 m-10 rounded ">
                <div>
                    <img src={`/images/products/${item?.ProductImage}`} alt="" className="max-h-[500px] my-2" />
                </div>
                <div>{item?.ProductName}</div>
                <Buymanager item={item}/>
                <div>
                    قیمت: {item?.ProductPrice}
                </div>
                <div>
                    توضیحات: {item?.ProductDesc}
                </div>
            </div>

        </Layout>
    )

}

export default DetailsProducts;