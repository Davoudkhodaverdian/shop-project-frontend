import { Drawer } from '@mui/material';
import React from 'react';
import MenubarItems from '../items';

interface Props {
    toggleDrawer: any
    open: boolean
}

const MenuMUI: React.FC<Props> = ({ toggleDrawer, open }) => {

    return (
        <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)} className="md:hidden ">
              <nav className={`bg-indigo-500 dark:bg-slate-900 text-white p-2 w-64 top-0 overflow-auto h-screen `}>
            <div className="p-4" >
                <img className="h-8 w-auto" src='/images/logos/next-logo.svg' alt="Workflow" />
            </div>
            <MenubarItems />
        </nav>
        </Drawer>
    )
}

export default MenuMUI;