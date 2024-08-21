import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function layout({ children }) {
  return (
    <div className=" h-screen flex   ">
      {/* left */}
      <div className="flex flex-col w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4  overflow-scroll">
         {/* LOGO */}
        <Link
          href="/"
          className="flex gap-2 items-center justify-center  lg:justify-start  "
        >
          <Image src={"/logo.png"} width={32} height={32} />
          <span className="hidden lg:block ">School</span>
        </Link>
        <Menu />
      </div>

      {/* rignh */}
      <div className=" w-[86%] md:w-[90%] lg:w-[84%] xl:w-[86%]  bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
