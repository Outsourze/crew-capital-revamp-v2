import Link from "next/link";

export const FillBtn = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="uppercase px-40 py-5 rounded-4xl brand-bg-primary font-bold text-black whitespace-nowrap"
    >
      {children}
    </button>
  );
};

export const FillBtnLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="uppercase cursor-pointer px-40 py-5 rounded-4xl brand-bg-primary font-bold text-black whitespace-nowrap inline-flex items-center justify-center"
    >
      {children}
    </Link>
  );
};
