import React, { useState } from 'react';
import Button from './button';
import MenuMUI from './menuMUI';


const DynamicMenubar: React.FC = () => {

    const [open, setOpen] = useState(false);
    const toggleDrawer = (open: any) => (event: any) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    return (
        <div className='px-3 flex items-center md:hidden'>
            <Button toggleDrawer={toggleDrawer} />
            <MenuMUI toggleDrawer={toggleDrawer} open={open} />
        </div>
    )
}

export default DynamicMenubar;