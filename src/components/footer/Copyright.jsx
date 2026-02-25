import Link from "next/link";

const CopyRight = () => {
    return (
            <div className="py-5 w-full flex justify-between items-center max-w-7xl m-auto border-t border-t-gray-700">
                <p className="text-center text-gray-300 text-sm">@ Copyright 2024 Crew Capital Management Pty. Ltd. (ABN) 46673436872   All rights reserved</p>

                <div className="flex items-center gap-3 ">
                    <Link href={"/"} className="text-sm text-gray-300">Terms & Condition</Link>
                    <Link href={"/"} className="text-sm text-gray-300">Privacy Policy</Link>
                </div>
            </div>
    )
}

export default CopyRight;