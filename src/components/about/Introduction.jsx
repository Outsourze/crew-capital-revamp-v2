import aboutbanner from "@/assets/images/about/about-banner.jpg";
import Link from "next/link";

const Introduction = () => {
    return (
        <div className="max-w-[112rem] m-auto w-full pb-10 px-5">
            <div
                style={{ backgroundImage: `url(${aboutbanner.src})` }} 
                className="flex flex-col gap-5 w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center py-32 rounded-3xl"
            >
                <h1 className="text-4xl text-white font-semibold">About Page</h1>
                <div className="flex gap-2 items-center border-opacity py-2 px-4 rounded-full text-white text-sm">
                    <Link href={"/"}>Home</Link>
                    <p className="">/ <span className="brand-text-orange">About Page</span></p>
                </div>
            </div>
        </div>
    )
}

export default Introduction;