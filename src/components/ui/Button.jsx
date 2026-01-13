import Link from "next/link";
export const FillBtn = ({
    children,
    onClick
}) => {
    return (
        <button onClick={onClick} className="uppercase px-40 rounded-4xl py-5 brand-bg-primary font-bold text-black">
            {children}
        </button>
    )
}

export const FillBtnLink = ({
    children,
    href
}) => {
    return (
        <Link href={href} className="uppercase cursor-pointer px-40 rounded-4xl py-5 brand-bg-primary font-bold text-black">
            {children}
        </Link>
    )
}




