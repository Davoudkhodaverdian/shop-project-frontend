'use client';
import React from 'react';
import MainItems from './mainItems';
import Username from './username';
import NecessaryItems from './neccessaryItems';
import DrawerMenuMaterialUi from './drawerMenuMaterialUi';


const Navbar: React.FC= () => {

    //const token = useAppSelector((state: RootState) => state.auth.verifyToken);

    return (
        <header>
            <div className=' px-3 bg-gray-100 dark:bg-slate-700 dark:text-white shadow-lg transition-all'>
                <div className='flex justify-between'>
                    <MainItems />
                    <DrawerMenuMaterialUi />
                    <div  className='hidden md:flex items-center  '><NecessaryItems /></div>
                </div>
            </div>
            <Username />
        </header>
    )
}

export default Navbar;