
import type { NextPage } from 'next'


const InitialItems: NextPage = () => {

    return (
       
        <ul className='md:flex relative'>
            <li className='p-1 cursor-pointer py-3 hover-active-item-navbar'>محصولات ویژه</li>
            <li className='p-1 cursor-pointer py-3 hover-active-item-navbar'>تخفیف ها</li>
            <li className='p-1 cursor-pointer py-3 hover-active-item-navbar'>راهنما</li>
        </ul>
       
    );
}

export default InitialItems;
