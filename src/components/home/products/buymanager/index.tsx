import React from "react";
import { useAppSelector } from '../../../../fundamental/hooks';
import { RootState } from "../../../../fundamental/store";
import MinusPlus from "./minusPlus";
import Add from "./add";
import AddedDescription from "./addedDescrption";

interface Props { item: any }
const Buymanager: React.FC<Props> = ({ item }) => {

    const shoppingBag = useAppSelector((state: RootState) => state.shoppingBag);
    const picked = shoppingBag.find(i => i.id === item.id);

    return (
        <>
            <div className="flex justify-between flex-shrink-0 items-center">
                <div className="px-2">
                    <span className="py-2 text-gray-900">{item?.price} <span className="text-sm">تومان</span></span>
                </div>
                {picked && <MinusPlus  item={ item }/>}
            </div>
            { !picked ? <Add item={ item }/> : <AddedDescription/>}
        </>
    )

}

export default Buymanager;