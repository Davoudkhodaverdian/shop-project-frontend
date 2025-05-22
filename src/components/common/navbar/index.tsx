import React, { useState } from 'react';
import Button from './button';
import MainItems from './mainItems';
import Username from './username';
import NecessaryItems from './neccessaryItems';

interface Props {
    isAuthentacted: boolean
}

const Navbar: React.FC<Props> = ({ isAuthentacted }) => {

    //const token = useAppSelector((state: RootState) => state.auth.verifyToken);

    const [show, setShow] = useState<boolean>(false)

    return (
        <>
            <div className=' px-3 bg-gray-100 dark:bg-slate-700 dark:text-white shadow-lg transition-all'>
                <div className='flex justify-between'>
                    <MainItems isAuthentacted={isAuthentacted} />
                    <Button setShow={setShow} />
                    <div className={`md:flex hidden`}><NecessaryItems /></div>
                </div>
                <div className={`block ${show ? '' : 'hidden'} md:hidden`}><NecessaryItems /></div>
            </div>
            <Username isAuthentacted={isAuthentacted} />
        </>
    )
}

export default Navbar;