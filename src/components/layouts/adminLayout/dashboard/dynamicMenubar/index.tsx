import React, { useState } from 'react';
import Button from './button';
import MenuMUI from './menuMUI';


const DynamicMenubar: React.FC = () => {

    const [open, setOpen] = useState(false);
    const toggleDrawer = (open : any) => (event : any) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpen(open);
      };

    return (
        <div>
            <div className='flex flex-col justify-center md:hidden'>
                <div className='p-3'>
                    <Button toggleDrawer={toggleDrawer} />
                </div>
                <MenuMUI toggleDrawer={toggleDrawer} open={open} />
            </div>
        </div>
    )
}

export default DynamicMenubar;