import Link from "next/link";

export const FillBtn = ({ children, onClick }) => {

  const handleL = () => {
    console.log("cliuck");
    
  }
  return (
    <button
      onClick={handleL}
      className="uppercase px-40 py-5 rounded-4xl bg-[#D6DD37] font-bold text-black whitespace-nowrap hover:bg-white/70 cursor-pointer tracking-[0.3em]"
    >
      {children}
    </button>
  );
};

export const FillBtnLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="uppercase cursor-pointer px-40 py-5 rounded-4xl bg-[#D6DD37] font-bold text-black whitespace-nowrap inline-flex items-center justify-center hover:bg-white/70 tracking-[0.3em]"
    >
      {children}
    </Link>
  );
};
