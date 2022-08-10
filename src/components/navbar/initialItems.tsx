
import type { NextPage } from 'next'


const Button: NextPage = () => {

    return (
       
        <ul className='md:flex '>
            <li className='p-1 cursor-pointer'>محصولات ویژه</li>
            <li className='p-1 cursor-pointer'>تخفیف ها</li>
            <li className='p-1 cursor-pointer'>راهنما</li>
        </ul>
       
    );
}

export default Button;
