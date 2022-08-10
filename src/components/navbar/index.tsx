import type { NextPage } from 'next'
import { useState } from 'react';
import Button from './button';
import InitialItems from './initialItems'
import Link from 'next/link'

const Navbar: NextPage = () => {

    const [show, setShow] = useState<boolean>(false)

    return (
        <div className=' p-3 bg-gray-100 dark:bg-slate-700 shadow dark:text-white shadow'>
            <div className='flex justify-between'>
                <div className=''>
                    <ul className='flex'>
                        <li className='p-1 cursor-pointer'>فروشگاه زنجیره ای</li>
                        <Link href="/register"><a><li className='p-1 cursor-pointer'>ثبت نام</li></a></Link>
                        <li className='p-1 cursor-pointer'>ورود</li>

                    </ul>
                </div>
                <Button setShow={setShow} />
                <div className={`md:block hidden`}>
                    <InitialItems />
                </div>
            </div>
            <div className={`block ${show ? '' : 'hidden'} md:hidden`}>
                <InitialItems />
            </div>

        </div>

    )
}

export default Navbar;