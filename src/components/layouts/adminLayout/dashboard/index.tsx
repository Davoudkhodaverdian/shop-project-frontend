import React, { ReactNode, useState } from 'react';
import DynamicMenubar from './dynamicMenubar';
import Menubar from './menubar'

interface Props {
    children: ReactNode
}


const Dashbord: React.FC<Props> = ({ children }) => {

    return (
        <div className='pr-0 flex flex-row dark:bg-slate-800 dark:text-white'>
            <Menubar />
            <DynamicMenubar/>
            <div className="flex flex-col w-full">
                <div className="w-full max-w-7xl mx-auto p-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Dashbord;