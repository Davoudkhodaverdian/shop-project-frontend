import Link from 'next/link'
import React from 'react';
import ActiveLink from '../../../../../shared/activeLink';
import SidebarData from './sidebarData.json';

const MenubarItems: React.FC = () => {

    return (
        <div className='bg-indigo-500'>
            {SidebarData.map((item) => (
                <ActiveLink href={item.root ? item.root : "/"} key={item.id}>
                    {
                        ({ active }) => (
                            <div className={`${active ? 'bg-indigo-800' : ''} flex p-2 mx-2 hover:bg-indigo-700 cursor-pointer rounded-sm active:bg-indigo-900`}>
                                <span>{item.descreption}</span>
                            </div>
                        )
                    }
                </ActiveLink>
            ))}
        </div>
    )
}

export default MenubarItems