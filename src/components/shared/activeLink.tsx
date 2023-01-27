import Link from "next/link"
import { useRouter } from "next/router";
import React, { ReactElement } from "react"


interface Props {
    children: ReactElement | (({ active }: { active: boolean }) => ReactElement)
    href: string
    as?: string
}

const ActiveLink: React.FC<Props> = ({ children, ...props }) => {
    
    const { asPath } = useRouter();
    const active = asPath === props.href || asPath === props.as;

    return (
        <Link {...props}>
            {
                typeof children === 'function' ?
                    children({ active })
                    : children
            }
        </Link>
    )
}
export default ActiveLink;