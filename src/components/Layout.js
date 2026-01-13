import Head from "next/head";
import { Poppins } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer/FooterContainer";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ['latin'],
  weight: ["400", "500","600", "700", "800"], // add your weights here
})

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={poppins.className}>
        <Header />
        <main className=''>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

