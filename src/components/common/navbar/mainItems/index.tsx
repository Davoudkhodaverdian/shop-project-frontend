import Link from "next/link"
import Profile from "../profile"

interface Props {
    isAuthentacted: boolean
}

const MainItems: React.FC<Props> = ({ isAuthentacted }) => {

    return (
        <div className=''>
            <ul className='flex'>
                <li className='p-1 py-3'>فروشگاه زنجیره ای</li>
                <Link href="/"><li className='p-1 cursor-pointer py-3 hover-navbar'>صفحه اصلی</li></Link>
                {
                    isAuthentacted ?

                        <li className='p-1 flex justify-center items-center'><Profile /></li>
                        :
                        <>
                            <Link href="/auth/register"><li className='p-1 cursor-pointer py-3 hover-navbar'>ثبت نام</li></Link>
                            <Link href="/auth/login"><li className='p-1 cursor-pointer py-3 hover-navbar'>ورود</li></Link>
                        </>
                }
            </ul>
        </div>
    )
}

export default MainItems;