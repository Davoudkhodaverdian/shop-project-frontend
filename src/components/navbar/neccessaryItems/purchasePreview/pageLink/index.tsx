import Link from "next/link"
import useAuth from "../../../../../app/hooks/useAuth";

const PageLink: React.FC = () => {

    return (
        <Link href={'/cart'}>
            <a className="">
                <div className="p-3 hover-navbar-link">
                    مشاهده صفحه سبد خرید <b>{'>'}</b>
                </div>
            </a>
        </Link>
    )
}

export default PageLink;