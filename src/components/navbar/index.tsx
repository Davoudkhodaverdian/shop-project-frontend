import type { NextPage } from 'next'
import { useState } from 'react';
import Button from './button';
import InitialItems from './initialItems'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import Language from './../language'
const Navbar: NextPage = () => {

    const [show, setShow] = useState<boolean>(false)
    const { t, i18n } = useTranslation();
    return (
        <div className=' p-3 bg-gray-100 dark:bg-slate-700 dark:text-white shadow'>
            <div className='flex justify-between'>
                <div className=''>
                    <ul className='flex'>
                        <li className='p-1 cursor-pointer'>فروشگاه زنجیره ای</li>
                        <Link href="auth/register"><a><li className='p-1 cursor-pointer'>{t('register')}</li></a></Link>
                        <Link href="auth/login"><a><li className='p-1 cursor-pointer'>{t('login')}</li></a></Link>
                        <li className='cursor-pointer flex justify-center items-center'><Language/></li>
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