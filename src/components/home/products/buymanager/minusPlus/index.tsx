import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../fundamental/hooks';
import { RootState } from '../../../../../fundamental/store';
import { removeShoppingBag, setCurrentProducthoppingBag } from '../../../../../fundamental/store/shoppingBagSlice';

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
        <div className="flex items-center justify-center border rounded-md my-2">
            <button onClick={HandleAddShoppingBag} className="  border-l px-5 text-green-600 text-center drop-shadow hover:text-green-700 active:text-green-800">
                <span className="text-2xl ">+</span>
            </button>
            <div className="text-xl  px-3">{number}</div>
            <button onClick={HandleRemoveShoppingBag} className={`${number === 1 ? 'px-2' : 'px-5'}  max-h-8 min-w-[52px]  border-r    text-red-600 text-center drop-shadow hover:text-red-700 active:text-red-800`}>
                {number === 1 ? <div className='grid justify-center my-2 h-full'><img className="max-h-[19px] " src="/images/svg/delete-button-svgrepo-com.svg" alt="" /></div>  : <span className=" text-2xl">-</span>}
            </button>
        </div>
    )
}

export default MinusPlus;