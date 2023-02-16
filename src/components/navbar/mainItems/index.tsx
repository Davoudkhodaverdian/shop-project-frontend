import Link from "next/link"
import Profile from "../profile"
import { useTranslation } from "react-i18next";

interface Props {
    isAuthentacted: boolean
}

const MainItems: React.FC<Props> = ({ isAuthentacted }) => {

    const { t, i18n } = useTranslation();
    return (
        <div className=''>
            <ul className='flex'>
                <li className='p-1 py-3'>فروشگاه زنجیره ای</li>
                <Link href="/"><a><li className='p-1 cursor-pointer py-3 hover-navbar'>{t('main page')}</li></a></Link>
                {
                    isAuthentacted ?

                        <li className='p-1 flex justify-center items-center'><Profile /></li>
                        :
                        <>
                            <Link href="/auth/register"><a><li className='p-1 cursor-pointer py-3 hover-navbar'>{t('register')}</li></a></Link>
                            <Link href="/auth/login"><a><li className='p-1 cursor-pointer py-3 hover-navbar'>{t('login')}</li></a></Link>
                        </>
                }
            </ul>
        </div>
    )
}

export default MainItems;