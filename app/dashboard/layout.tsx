import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import Image from "next/image"; 


const inter = Inter({ subsets: ["latin"], variable:  '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight:['400','700'],variable:  '--font-ibm-plex-serif'})

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Agona West NDC Collation System",
  icons: {
    icon: '/logo.jpg'
  }
};

export default async function RootLayout ({children}: Readonly<{children :React.ReactNode;}>){
    return(
        <main className="flex h-screen w-full font-inter">

          <div className="hidden xl:block fixed  z-50 w-[300px] h-auto ">
          <Sidebar/>
          </div>

             <div className="root-layout fixed flex w-full  bg-white z-10 bottom">
                    <Image src="/logo1.svg" alt="Menu Icon" width={50} height={50} className="rounded-full"/>
                   <MobileNavbar />
                </div>
            <div className="w-full xl:pl-[308px] md:mt-5">
           
                {children}
            </div>
        </main>
    )
}