
import React, { useState } from "react";
import Product from "../models/Product";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addShoppingBag, removeShoppingBag } from "../../app/store/shoppingBagSlice";

interface Props {
    item: Product
}
const Buymanager: React.FC<Props> = ({ item }) => {

    const shoppingBag = useAppSelector((state) => state.shoppingBag);
    const [picked, setPicked] = useState(!!shoppingBag.find(i => i.ProductID === item.ProductID));
    const dispitch = useAppDispatch();
    const HandleShoppingBag = () => {
        if (picked) {
           // dispitch(removeShoppingBag(item.id))
        } else {
           // dispitch(addShoppingBag(item))
        }
    }

    return (
        <>
            {picked ?
                <>
                    <span className="p-2 m-3 rounded-sm  text-center text-violet-500 drop-shadow hover:text-violet-600 active:text-violet-700 focus:ring">به سبد خرید اضافه شد</span>
                    <button onClick={HandleShoppingBag} className="p-2 m-3 rounded-sm border border-red-600 text-red-600 text-center drop-shadow hover:text-red-700 active:text-red-800">
                        حذف از سبد خرید
                    </button>
                </>
                :
                <button onClick={HandleShoppingBag} className="p-2 m-3 rounded-sm text-white text-center bg-violet-500 drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">
                    افزودن به سبد خرید
                </button>
            }
        </>


    )

}

export default Buymanager;