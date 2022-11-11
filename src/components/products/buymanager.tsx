import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from "../../app/store";
import { addShoppingBag, removeShoppingBag, setCurrentProducthoppingBag } from "../../app/store/shoppingBagSlice";

interface Props { item: any }

const Buymanager: React.FC<Props> = ({ item }) => {
    
    
    const shoppingBag = useAppSelector((state: RootState) => state.shoppingBag);
    const [picked, setPicked] = useState(!!shoppingBag.find(i => i.id === item.id));
    const [number, setNumber] = useState<number>(
        !!shoppingBag.find(i => i.id === item.id) ? shoppingBag.find(i => i.id === item.id).number : 0
    );

    // console.log("Buymanager",shoppingBag);
    const dispatch = useAppDispatch();

    const HandleShoppingBag = () => {

        setPicked(true);
        setNumber(1);
        dispatch(addShoppingBag({ ...item, number: 1 }));

    }
    const HandleAddShoppingBag = () => {
        dispatch(setCurrentProducthoppingBag({ ...item, number: number + 1 }))
        setNumber(prev => ++prev);
    }
    const HandleRemoveShoppingBag = () => {
        dispatch(setCurrentProducthoppingBag({ ...item, number: number - 1 }))
        setNumber(prev => --prev);
        if (number - 1 === 0) {
            setPicked(false);
            dispatch(removeShoppingBag(item.id));
        }
    }

    return (
        <>
            <>
                <div className="flex justify-between flex-shrink-0 items-center">
                    <div>
                        <span className="py-2 text-gray-900">{item?.price} / <span className="text-sm">تومان</span></span>
                    </div>
                    {picked &&
                        <div>
                            <div className="flex items-center justify-center">
                                <button onClick={HandleAddShoppingBag} className="px-2 mx-3 rounded-sm text-green-600 text-center drop-shadow hover:text-green-700 active:text-green-800">
                                    <span className="text-2xl">+</span>
                                </button>
                                <span className="text-xl">{number}</span>
                                <button onClick={HandleRemoveShoppingBag} className="px-2 mx-3 rounded-sm   text-red-600 text-center drop-shadow hover:text-red-700 active:text-red-800">
                                    {number === 1 ? <img className="h-[20px]" src="/images/svg/delete-button-svgrepo-com.svg" alt="" /> : <span className="text-2xl">-</span>}
                                </button>
                            </div>
                        </div>
                    }
                </div>

            </>
            {!picked ?
                <div className="pt-2">
                    <button onClick={HandleShoppingBag}
                        className='w-full p-1 m-1 rounded-sm text-white text-center bg-violet-500 drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300'
                        type="button">
                        افزودن به سبد خرید
                    </button>
                </div>
                :
                <div className="flex justify-between items-center">
                    <div>
                        <span className="p-1 m-1 rounded-sm  text-center text-violet-500 drop-shadow hover:text-violet-600 active:text-violet-700 focus:ring">
                            به سبد خرید اضافه شد
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <button className="p-1 m-1 rounded-sm  text-center border border-violet-500 text-violet-500 drop-shadow hover:text-violet-600 active:text-violet-700 focus:ring">مشاهده سبد خرید</button>
                        </div>
                    </div>
                </div>
            }
        </>


    )

}

export default Buymanager;