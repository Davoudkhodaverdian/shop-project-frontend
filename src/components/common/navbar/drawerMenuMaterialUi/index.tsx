import React from 'react';
import Drawer from '@mui/material/Drawer';
import NecessaryItems from '../neccessaryItems';
import Link from 'next/link';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const DrawerMenuMaterialUi: React.FC = () => {

  const [state, setState] = React.useState(false);
  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(open);
    };

  return (
    <>
      <button onClick={toggleDrawer(true)} className='cursor-pointer flex flex-col justify-center p-[10px]'>
        <svg xmlns="http://www.w3.org/2000/svg" className=' rounded-md shadow hover:scale-110 md:hidden text-violet-500 transition hover:text-violet-800 h-6 w-6' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <Drawer
        anchor={'right' as Anchor}
        open={state}
        onClose={toggleDrawer(false)}
        className='md:hidden'
        disableScrollLock={true}
      >
        <div className={`h-[100vh] w-64 flex flex-col justify-between`}>
          <div>
            <div className='cursor-pointer p-3' onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}>
              <img src="/images/svg/right-table-pagination.svg" height={20} alt="<" className='h-[20px]' />
            </div>
            <ul className=''>
              <Link className='' href="/"><li className='p-1 cursor-pointer py-3 hover-navbar'>صفحه اصلی</li></Link>
              <Link className='' href="/products"><li className='p-1 cursor-pointer py-3 hover-navbar'>محصولات</li></Link>
              <li className='p-1 py-3 '><NecessaryItems /></li>
            </ul>

          </div>
        </div>
      </Drawer>
    </>
  );
}

export default DrawerMenuMaterialUi;