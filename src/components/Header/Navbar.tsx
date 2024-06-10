"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";
import classNames from "classnames";
import data from "@/data/hero.json";
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="w-full py-9 sm:py-[25px] lg:py-6 absolute ">
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
            className="flex items-center py-0 px-0 md:py-2 text-white md:px-8 border-solid border-2 border-white hover:border-mainBlue rounded-full backdrop-blur-sm bg-black/15 hover:text-mainBlue focus:text-mainBlue active:text-mainBlue transition duration-300 ease-out"
          >
            <IoMdContact className="h-[45px] w-[45px] md:h-[25px] md:w-[25px] group-hover:fill-mainBlue group-active:fill-mainBlue" />
            <p className="hidden md:flex">Contacts</p>
          </Link>
          <button
            type="button"
            aria-label="toggle menu button open"
            className="text-mainWhite textNormal cursor-pointer block uppercase"
            onClick={handleOpen}
          >
            <GiHamburgerMenu className="h-[45px] w-[45px] md:hidden" />
          </button>
        </div>
      </div>
    </nav>
  );
}
