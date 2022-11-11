import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../app/hooks';
import { setCurrentPerson } from '../../../../app/store/currentPersonSlice';
import { setAuth } from '../../../../app/store/auth';

const MaterialUIMenu: React.FC<any> = ({ children }) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef: React.MutableRefObject<null> = React.useRef(null);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const exit = () => {
        setOpen(false)
        dispatch(setAuth(''));
        dispatch(setCurrentPerson({ firstName: '', lastName: '', email: '' }));
    }

    const handleToggle = () => { setOpen((prevOpen) => !prevOpen) };

    const handleClose = (event: any) => {

        if ((anchorRef.current as any && anchorRef?.current as any).contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event: any) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            //(anchorRef?.current as any).focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <div className='flex justify-center items-center cursor-pointer hover-active-item-navbar'
                ref={anchorRef} onClick={handleToggle}>
                {children}
                <div className='flex'>
                    <img src="/images/svg/down-chevron-svgrepo-com.svg" alt="drop-down"
                        className={`h-3 m-1 transition-all ${open && "rotate-180"}`} />
                </div>
            </div>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList className='relative'  autoFocusItem={open} onKeyDown={handleListKeyDown}>
                    <div className={`${open ? "transform opacity-100 z-10" : "transform opacity-0 z-[-1]"} transition-all absolute right-[-97px] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <ul className='flex flex-col'>
                            <Link href="/panel">
                                <a>
                                    <li className='px-2 cursor-pointer py-3 hover-active-item-navbar flex'>{t('panel')}</li>
                                </a>
                            </Link>
                            <li className='p-1 cursor-pointer py-3 hover-active-item-navbar flex' onClick={exit} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                {t('exit')}
                            </li>
                        </ul>
                    </div>
                </MenuList>
            </ClickAwayListener>
        </>

    );
}

export default MaterialUIMenu;