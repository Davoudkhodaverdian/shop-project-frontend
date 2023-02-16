import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks';
import { RootState } from '../../../../../app/store';
import { removeShoppingBag, setCurrentProducthoppingBag } from '../../../../../app/store/shoppingBagSlice';

interface Props { item: any }

const MinusPlus: React.FC<Props> = ({ item }) => {

    const shoppingBag = useAppSelector((state: RootState) => state.shoppingBag);
    const number = !!shoppingBag.find(i => i.id === item.id) ? shoppingBag.find(i => i.id === item.id).number : 0;
    const dispatch = useAppDispatch();
    const HandleAddShoppingBag = () => { dispatch(setCurrentProducthoppingBag({ ...item, number: number + 1 })) }
    const HandleRemoveShoppingBag = () => {
        dispatch(setCurrentProducthoppingBag({ ...item, number: number - 1 }))
        if (number - 1 === 0) dispatch(removeShoppingBag(item.id));
    }
    return (
        <div className="flex items-center justify-center">
            <button onClick={HandleAddShoppingBag} className="px-2 mx-3 rounded-sm text-green-600 text-center drop-shadow hover:text-green-700 active:text-green-800">
                <span className="text-2xl">+</span>
            </button>
            <span className="text-xl">{number}</span>
            <button onClick={HandleRemoveShoppingBag} className={`${number === 1 ? "px-1" : "px-2"} mx-3 rounded-sm   text-red-600 text-center drop-shadow hover:text-red-700 active:text-red-800`}>
                {number === 1 ? <img className="h-[18px]" src="/images/svg/delete-button-svgrepo-com.svg" alt="" /> : <span className="text-2xl">-</span>}
            </button>
        </div>
    )
}

export default MinusPlus;