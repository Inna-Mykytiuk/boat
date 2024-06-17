import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="gallery"
      className="relative w-full bg-dark pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px]
      
      after:hidden md:after:block after:absolute after:bg-lines after:top-0 after:right-[-20px] after:h-full after:w-[650px] after:bg-cover after:z-[1]
      "
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row pb-10 xl:pb-[80px] border-b-[1px] border-white mb-[50px]">
          <div className="flex flex-col max-w-full xl:max-w-[40%]">
            <h3 className="text-white font-comforta text-2xl uppercase mb-[30px]">
              Boat
            </h3>
            <p className="text-white text-xs leading-7 font-normal mb-8 xl:mb-0">
              Dive Into Excitement With Our Range Of Speed Boat Tours And
              Packages! Choose From Thrilling High-Speed Rides Along The
              Coastline, Leisurely Cruises To Scenic Landmarks, Or Customized
              Adventures Tailored To Your Preferences.
            </p>
          </div>
          <div className="flex flex-col justify-center xl:justify-end sm:flex-row gap-[50px] ml-0 xl:ml-auto">
            <div>
              <h4 className="text-white text-center sm:text-start font-comforta text-base font-normal uppercase mb-[30px]">
                Social networks
              </h4>
              <ul className="text-white grid grid-cols-3 gap-4">
                <li className="group flex items-center justify-center   cursor-pointer transition duration-300 ease-out w-full h-full">
                  <a
                    href="#"
                    aria-label="facebook"
                    className="flex items-center justify-center text-dark h-[35px] w-[35px] bg-white p-1 rounded-full"
                  >
                    <FaFacebookF className="h-[25px] w-[25px] group-hover:text-mainBlue transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center   cursor-pointer transition duration-300 ease-out w-full h-full">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex items-center justify-center text-dark h-[35px] w-[35px] bg-white p-1 rounded-full"
                  >
                    <AiFillInstagram className="h-[25px] w-[25px] group-hover:text-pink-600 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center   cursor-pointer transition duration-300 ease-out w-full h-full">
                  <a
                    href="https://www.linkedin.com/in/inna-mykytiuk/"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center text-dark h-[35px] w-[35px] bg-white p-1 rounded-full"
                  >
                    <FaLinkedinIn className="h-[25px] w-[25px] group-hover:text-blue-500 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center   cursor-pointer transition duration-300 ease-out w-full h-full">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex items-center justify-center text-dark h-[35px] w-[35px] bg-white p-1 rounded-full"
                  >
                    <FaTwitter className="h-[25px] w-[25px] group-hover:text-blue-400 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center   cursor-pointer transition duration-300 ease-out w-full h-full">
                  <a
                    href="https://github.com/Inna-Mykytiuk"
                    aria-label="Github"
                    className="flex items-center justify-center text-dark h-[35px] w-[35px] bg-white p-1 rounded-full"
                  >
                    <FaGithubAlt className="h-[25px] w-[25px] group-hover:text-gray-500 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center   cursor-pointer transition duration-300 ease-out w-full h-full">
                  <a
                    href="#"
                    aria-label="Telegram"
                    className="flex items-center justify-center text-dark h-[35px] w-[35px] bg-white p-1 rounded-full"
                  >
                    <FaTelegramPlane className="h-[25px] w-[25px] group-hover:text-blue-500 transition duration-300 ease-out" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-comforta uppercase text-base font-normal mb-[30px]">
                Contacts
              </h4>

              <p className="flex gap-1 text-white text-xs mb-4">
                <FaLocationDot />
                Kyiv Region, Ukraine
              </p>
              <p className="flex gap-1 text-white text-xs mb-4">
                <MdEmail />
                innka-pinnka@ukr.net
              </p>
              <p className="flex gap-1 text-white text-xs">
                <FaPhoneAlt />
                +380 (93) 999-99-99
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="text-white text-sm">© Boat.com. All Rights Reserved.</p>
          <p className="text-white text-sm">Made by Tokio❤️</p>
        </div>
      </div>
    </section>
  );
}