// import Image from "next/image";
import Link from "next/link";
import data from "@/data/hero.json";
// import logo from "../../../public/icons/logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-dark text-3xl font-bold font-comforta cursor-pointer hover:scale-125 focus:scale-125 transition-all duration-300 ease-in-out outline-none focus:outline-none hover:text-mainBlue focus:text-mainBlue active:text-mainBlue"
    >
      {/* <Image
        src={logo}
        alt="travel logo"
        width={100}
        height={100}
        loading="lazy"
        className="w-[59px] h-[21px]"
        aria-label="logo"
      /> */}
      {data.logoText}
    </Link>
  );
}
