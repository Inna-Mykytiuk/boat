import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <section
      id="gallery"
      className="w-full bg-dark pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px]"
    >
      <div className="container">
        <div className="flex flex-col xl:flex-row pb-10 xl:pb-[80px] border-b-[1px] border-white mb-[50px]">
          <div className="flex flex-col max-w-full xl:max-w-[40%]">
            <h3 className="text-white font-comforta text-2xl uppercase mb-[30px]">
              Boat
            </h3>
            <p className="text-white text-xs leading-7 font-normal">
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
                <li className="group flex items-center justify-center bg-white p-1 rounded-full h-[35px] w-[35px] cursor-pointer transition duration-300 ease-out">
                  <a href="#" aria-label="facebook" className="text-dark">
                    <FaFacebookF className="h-[25px] w-[25px] group-hover:text-mainBlue transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center bg-white p-1 rounded-full h-[35px] w-[35px] cursor-pointer transition duration-300 ease-out">
                  <a href="#" aria-label="Instagram" className="text-dark">
                    <AiFillInstagram className="h-[25px] w-[25px] group-hover:text-pink-600 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center bg-white p-1 rounded-full h-[35px] w-[35px] cursor-pointer transition duration-300 ease-out">
                  <a
                    href="https://www.linkedin.com/in/inna-mykytiuk/"
                    aria-label="LinkedIn"
                    className="text-dark"
                  >
                    <FaLinkedinIn className="h-[25px] w-[25px] group-hover:text-blue-500 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center bg-white p-1 rounded-full h-[35px] w-[35px] cursor-pointer transition duration-300 ease-out">
                  <a href="#" aria-label="Twitter" className="text-dark">
                    <FaTwitter className="h-[25px] w-[25px] group-hover:text-blue-400 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center bg-white p-1 rounded-full h-[35px] w-[35px] cursor-pointer transition duration-300 ease-out">
                  <a
                    href="https://github.com/Inna-Mykytiuk"
                    aria-label="Github"
                    className="text-dark"
                  >
                    <FaGithubAlt className="h-[25px] w-[25px] group-hover:text-gray-500 transition duration-300 ease-out" />
                  </a>
                </li>
                <li className="group flex items-center justify-center bg-white p-1 rounded-full h-[35px] w-[35px] cursor-pointer transition duration-300 ease-out">
                  <a href="#" aria-label="Telegram" className="text-dark">
                    <FaTelegramPlane className="h-[25px] w-[25px] group-hover:text-blue-500 transition duration-300 ease-out" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-white font-comforta uppercase text-base font-normal mb-[30px]">
                Contacts
              </h4>
              <p className="text-white text-xs">Dive Into Excitement</p>
              <p className="text-white text-xs">Dive Into Excitement</p>
              <p className="text-white text-xs">Dive Into Excitement</p>
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
