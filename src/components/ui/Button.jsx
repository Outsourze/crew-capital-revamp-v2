import Link from "next/link";
export const DarkBtn = ({
    children,
    onClick
}) => {
    return (
        <button onClick={onClick} className="border border-green-300 rounded-full px-8 py-[10px] flex items-center gap-2 text-green-300 font-semibold cursor-pointer duration-300
            hover:bg-green-300 hover:text-[#16243E]">
            {children}
        </button>
    )
}

export const LightBtn = ({
    onClick,
    children
}) => {
    return (
        <button onClick={onClick} className=" rounded-full px-8 py-[10px] flex items-center gap-2 text-green-300 brand-bg-navy font-semibold cursor-pointer duration-300
            hover:bg-[#E3572B] hover:text-white">
            {children}
        </button>
    )
}


export const DarkBtnLink = ({
    url,
    children
}) => {
    return (
        <Link 
            href={url} 
            className="border border-green-300 rounded-full px-8 py-[10px] flex items-center gap-2 text-green-300 duration-300 font-semibold cursor-pointer
                hover:bg-green-300 hover:text-[#16243E]"
        >
            {children}
        </Link>
    )
}

export const LightBtnLink = ({
    url,
    children
}) => {
    return (
        <Link href={url} className=" rounded-full px-8 py-[10px] flex items-center gap-2 text-green-300 brand-bg-navy font-semibold cursor-pointer duration-300
            hover:bg-[#E3572B] hover:text-white">
            {children}
        </Link>
    )
}



