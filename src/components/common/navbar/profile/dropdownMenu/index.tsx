import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ClickAwayListener, MenuList } from '@mui/material';
import useAuth from '@/fundamental/hooks/useAuth';
import { removeLoginToken } from '@/fundamental/helpers/auth';

interface Props {
    children: ReactNode
}

const DropdownMenu: React.FC<Props> = ({ children }) => {

    const [open, setOpen] = React.useState(false);
    const anchorRef: React.RefObject<null> = React.useRef(null);
    const { mutate } = useAuth();

    const exit = async () => {
        setOpen(false);
        // logout with redux
        // dispatch(setAuth({ verifyToken: '', user: null, newLogin: false }));
        // logout with swr
        await removeLoginToken();
        await mutate({ verifyToken: '', user: null, newLogin: false } as any)
        // await Router.push('/');

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
            <div className='flex justify-center items-center cursor-pointer hover-navbar'
                ref={anchorRef} onClick={handleToggle}>
                {children}
                <div className='flex'>
                    <img src="/images/svg/down-chevron-svgrepo-com.svg" alt="drop-down"
                        className={`h-3 m-1 transition-all ${open && "rotate-180"}`} />
                </div>
            </div>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList className='relative' autoFocusItem={open} onKeyDown={handleListKeyDown}>
                    <div className={`${open ? "transform opacity-100 z-10" : "transform opacity-0 z-[-1]"} transition-all absolute right-[-97px] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <ul className='flex flex-col'>
                            <Link href="/panel">
                                <li className='px-2 cursor-pointer py-3 hover-navbar flex'>پنل کاربری</li>
                            </Link>
                            <li className='p-1 cursor-pointer py-3 hover-navbar flex' onClick={exit} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                خروج
                            </li>
                        </ul>
                    </div>
                </MenuList>
            </ClickAwayListener>
        </>

    );
}

export default DropdownMenu;