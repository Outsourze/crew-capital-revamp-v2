
import blue from "@/assets/images/about/blue.jpg"
import hall from "@/assets/images/about/hall.jpg"
import jewel from "@/assets/images/about/jewelfinance_logo.jpg"
import Image from "next/image"

const partners = [
  blue,
  hall,
  jewel
]

const Partners = ({
  styles
}) => {
    return (
        <div className={`${styles} max-w-7xl w-full flex justify-between items-center m-auto my-20 gap-6`}>
             {partners.map((i, index) => (
               <Image
                 src={i}
                 key={index}
                 className="rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                 alt=""
               />
             ))}
        </div>
    )
}

export default Partners;