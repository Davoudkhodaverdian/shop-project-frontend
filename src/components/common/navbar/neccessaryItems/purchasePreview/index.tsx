import React from "react";
import ShoppingBag from "../../shoppingBag";
import Products from "./products";
import { ClickAwayListener, MenuList } from "@mui/material";
import PageLink from "./pageLink";

const PurchasePreview: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const anchorRef: React.RefObject<null> = React.useRef(null);
    const handleToggle = () => { setOpen((prevOpen) => !prevOpen) };

    const handleClose = (event: any) => {

        if ((anchorRef.current as any && anchorRef?.current as any).contains(event.target)) {
            return;
        }
        setOpen(false);
    };
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
            <li onClick={handleToggle}  ref={anchorRef}
                className='cursor-pointer flex items-center hover-navbar'>
                <ShoppingBag />
            </li>
            <ClickAwayListener onClickAway={handleClose}>
                <MenuList className='' autoFocusItem={open}
                >
                    <div className={`${open ? "transform opacity-100 z-10" : "transform opacity-0 z-[-1]"} left-0 w-full md:w-96  transition-all absolute  mt-2 origin-top-right divide-y divide-gray-100 rounded-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg p-1 md:top-7 md:left-0 top-0 `}>
                        <PageLink />
                        <Products />
                    </div>
                </MenuList>
            </ClickAwayListener>
        </>
    )
}

export default PurchasePreview;