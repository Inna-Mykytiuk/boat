"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu"; // Імпорт нового компонента
import data from "@/data/hero.json";
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-9 sm:py-[38px] lg:py-6 absolute ">
      <div className="container flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex items-center gap-4">
          {data.links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                smooth={true}
                href="#"
                ignoreCancelEvents={true}
                className="font-normal text-base font-roboto transition-[color] duration-300 ease-out hover:text-mainBlue focus:text-mainBlue active:text-mainBlue"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 md:gap-0">
          <Link
            to={data.contacts}
            smooth={true}
            href="#"
            ignoreCancelEvents={true}
            className="flex items-center py-0 px-0 md:py-2 text-white md:px-8 border-solid border-2 border-white hover:border-mainBlue rounded-full backdrop-blur-sm bg-mainBlue/30 hover:text-mainBlue focus:text-mainBlue active:text-mainBlue transition duration-300 ease-out"
          >
            <IoMdContact className="h-[45px] w-[45px] md:h-[25px] md:w-[25px] group-hover:fill-mainBlue group-active:fill-mainBlue" />
            <p className="hidden md:flex">Contacts</p>
          </Link>
          <button
            type="button"
            aria-label="toggle menu button open"
            className="text-white text-normal cursor-pointer block
            border-solid border-2 border-white hover:border-mainBlue rounded-full backdrop-blur-sm bg-mainBlue/30 hover:text-mainBlue focus:text-mainBlue active:text-mainBlue transition duration-300 ease-out p-1 md:hidden"
            onClick={handleToggle}
          >
            <GiHamburgerMenu className="h-[35px] w-[35px] md:hidden" />
          </button>
        </div>
      </div>
      <BurgerMenu isOpen={isOpen} handleToggle={handleToggle} />{" "}
      {/* Використання нового компонента */}
    </nav>
  );
}
