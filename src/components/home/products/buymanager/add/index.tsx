import React from 'react';
import { useAppDispatch } from '../../../../../fundamental/hooks';
import { addShoppingBag } from '../../../../../fundamental/store/shoppingBagSlice';

interface Props {
    item: any
}
const Add: React.FC<Props> = ({ item }) => {

    const dispatch = useAppDispatch();
    const HandleShoppingBag = () => {
        dispatch(addShoppingBag({ ...item, number: 1 }));
    }
    
    return (
        <div className="pt-2">
            <button onClick={HandleShoppingBag}
                className='w-full p-1  rounded-sm text-white text-center bg-violet-500 drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300'
                type="button">
                افزودن به سبد خرید
            </button>
        </div>
    )


}

export default Add;