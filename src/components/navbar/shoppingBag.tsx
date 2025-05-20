import { useAppSelector } from '../../fundamental/hooks';


const ShoppingBag: React.FC = () => {

    const shoppingBag = useAppSelector((state) => state.shoppingBag);

    const getNumberShoppingBag = (shoppingBag: any) => {
        let num = 0;
        shoppingBag.map((item: any) => { num = num + item.number });
        return num;
    }

    let number = getNumberShoppingBag(shoppingBag);
    
    return (
        <div className='flex items-center cursor-pointer border p-2 rounded-sm text-center relative'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </span>
            <button>
                <div className='px-1'>سبد خرید <span className='px-2 text-white bg-purple-700 rounded-full absolute left-[84px] top-[18px] scale-[0.7] shadow'>{number}</span></div>
            </button>
        </div>
    );
}

export default ShoppingBag;
