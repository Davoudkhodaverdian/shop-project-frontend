import Link from "next/link"

const PageLink: React.FC = () => {

    return (
        <Link href={'/cart'}>
            <>
                <div className="p-3 hover-navbar-link">
                    مشاهده صفحه سبد خرید <b>{'>'}</b>
                </div>
            </>
        </Link>
    )
}

export default PageLink;