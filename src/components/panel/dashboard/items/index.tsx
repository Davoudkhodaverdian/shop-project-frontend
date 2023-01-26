import Link from 'next/link'
import SidebarData from './sidebarData.json';


function MenubarItems() {

    return (
        <div className='bg-indigo-500'>
            {SidebarData.map((item) => (
                <Link href={item.root ? item.root : "/"} key={item.id}>
                        <div  className="flex p-2 mx-2 hover:bg-indigo-800 cursor-pointer rounded-sm active:bg-indigo-900">
                            <span>{item.descreption}</span>
                        </div>
                </Link>
            ))}
        </div>
    )
}

export default MenubarItems