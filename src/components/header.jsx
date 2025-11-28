import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from '@/components/nav/destop-nav';
import { useMediaQuery } from '@/utility/useMediaQuery';
import crewCapitalLogo from "@/assets/logo/crew-capital-logo.png";
import DesktopHeader from '@/components/nav/desktop-header';

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

    return (
      <div className="">
          <div className='flex flex-col w-full'>
            {/* {isDesktop && <DesktopHeader />} */}
            <div className='flex items-center justify-between max-w-[112rem] w-full m-auto py-5 px-5'>
              <Link href={"/"} aria-label="Outsouzed Home">
                <Image src={crewCapitalLogo}/>
              </Link>
              {isDesktop && <DesktopNav />}
            </div>
          </div>
      </div>
    )
}

export default Header;