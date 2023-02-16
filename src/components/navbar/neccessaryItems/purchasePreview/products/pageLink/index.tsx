import Link from "next/link"
import useAuth from "../../../../../../app/hooks/useAuth";

const PageLink: React.FC = () => {

    const { user } = useAuth();

    return (
        <>
            {
                user ?

                    <Link href={'/cart'}>
                        <a className="">
                            <div className="p-3 hover-navbar-link">
                                مشاهده صفحه سبد خرید <b>{'>'}</b>
                            </div>
                        </a>
                    </Link> :
                    <div className="p-3">برای مشاهده صفحه سبد خرید ابتدا وارد سایت شوید</div>
            }
        </>

    )
}

export default PageLink;