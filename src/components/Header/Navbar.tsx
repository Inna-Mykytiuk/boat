"use client";

import React from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";
import classNames from "classnames";
import data from "@/data/hero.json";
import { IoMdContact } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full pt-9 pb-9 sm:pt-[25px] sm:pb-[66px] lg:pt-6 lg:pb-[50px] absolute ">
      <div className="container flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-4">
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
        <Link
          to={data.contacts}
          smooth={true}
          href="#"
          ignoreCancelEvents={true}
          className="flex items-center py-2 text-white px-8 border-solid border-2 border-white hover:border-mainBlue rounded-full backdrop-blur-sm bg-black/15 hover:text-mainBlue focus:text-mainBlue active:text-mainBlue transition duration-300 ease-out"
        >
          <IoMdContact className="h-[25px] w-[25px] group-hover:fill-mainBlue group-active:fill-mainBlue" />
          Contacts
        </Link>
      </div>
    </nav>
  );
}
