import { memo } from 'react';
import MenubarItems from './items';


const Menubar: React.FC = () => {

    return (
        <nav className={`bg-indigo-500 dark:bg-slate-900 text-white p-2 w-64 top-0 overflow-auto h-[100vh] md:block hidden`}>
            <div className="p-4" >
                <img className="h-8 w-auto" src='/images/logos/next-logo.svg' alt="Workflow" />
            </div>
            <MenubarItems />
        </nav>
    )
}

export default memo(Menubar);

