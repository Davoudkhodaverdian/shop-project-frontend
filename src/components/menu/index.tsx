
import type { NextPage } from 'next'
import Search from './search';
import ShoppingBag from './shoppingBag';


const Button: NextPage = () => {

    return (

        <div className='md:flex justify-between p-3 bg-white border-b border-b-slate-300 shadow'>
            <div className='flex items-center'>
                <div>
                    <button className="p-2 rounded-sm text-white text-center bg-violet-500 drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">
                        منوی محصولات
                    </button>
                </div >
                  <Search/>
            </div>
            
                <ShoppingBag/>
            

        </div>
    );
}

export default Button;
