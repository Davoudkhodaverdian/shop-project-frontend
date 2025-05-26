import Link from "next/link"
import Profile from "../profile"
import { useAppSelector } from "@/fundamental/hooks";
import Loading from "../../loading";



const MainItems: React.FC = () => {
    const isAuthentacted = !!useAppSelector((state) => state.auth.user);
    const loading = useAppSelector((state) => state.auth.loading);
    return (
        <div className=''>
            <ul className='flex'>
                <li className='p-1 py-3'>فروشگاه زنجیره ای</li>
                <Link className='hidden md:block' href="/"><li className='p-1 cursor-pointer py-3 hover-navbar'>صفحه اصلی</li></Link>
                <Link  className='hidden md:block' href="/products"><li className='p-1 cursor-pointer py-3 hover-navbar'>محصولات</li></Link>
                {
                  loading ? <Loading  justSpinner={true} /> :  isAuthentacted ?

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