import type { NextPage } from 'next'
import { useState } from 'react';
import Button from './button';
import InitialItems from './initialItems'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import Language from './../language'
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { setAuth } from '../../app/store/auth';
import { useDispatch } from 'react-redux';
import { setCurrentPerson } from '../../app/store/currentPersonSlice';
const Navbar: NextPage = () => {
    const token = useAppSelector((state: RootState) => state.auth.verifyToken);
    const currentPerson = useAppSelector((state: RootState) => state.currentPerson);
    const dispatch = useDispatch();
    const [show, setShow] = useState<boolean>(false)
    const { t, i18n } = useTranslation();

    const exit = ()=>{
        dispatch(setAuth(''));
        dispatch(setCurrentPerson({name:"",email:""}));
    }

    return (
        <>
        <div className=' px-3 bg-gray-100 dark:bg-slate-700 dark:text-white shadow-lg'>
            <div className='flex justify-between'>
                <div className=''>
                    <ul className='flex'>
                        <li className='p-1 cursor-pointer py-3'>فروشگاه زنجیره ای</li>
                        <Link href="/"><a><li className='p-1 cursor-pointer py-3 hover-active-item-navbar'>{t('main page')}</li></a></Link>
                        {
                            token ?
                                <>
                                    <li className='p-1 cursor-pointer py-3 hover-active-item-navbar'>{t('profile')}</li>
                                    <li className='p-1 cursor-pointer py-3 hover-active-item-navbar' onClick={exit} >{t('exit')}</li>
                                </>
                                :

                                <>
                                    <Link href="auth/register"><a><li className='p-1 cursor-pointer py-3 hover-active-item-navbar'>{t('register')}</li></a></Link>
                                    <Link href="auth/login"><a><li className='p-1 cursor-pointer py-3 hover-active-item-navbar'>{t('login')}</li></a></Link>
                                </>

                        }

                        <li className='cursor-pointer flex justify-center items-center py-3 hover-active-item-navbar'><Language /></li>
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
        <div className='p-2'>{currentPerson.name ? `${currentPerson.name} عزیز خوش آمدید`: ''}</div>
        </>

    )
}

export default Navbar;