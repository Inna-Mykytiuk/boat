"use client";

import { useEffect } from "react";
import { Link } from "react-scroll";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import data from "@/data/hero.json";

interface BurgerMenuProps {
  isOpen: boolean;
  handleToggle: () => void;
}

interface LinkData {
  path: string;
  text: string;
}

interface HeroData {
  links: LinkData[];
  contacts: string;
}

const heroData: HeroData = data;

export default function BurgerMenu({ isOpen, handleToggle }: BurgerMenuProps) {
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

  return (
    <div
      className={classNames(
        " fixed top-0 left-0 w-full h-full bg-mainBlue text-white transition-transform duration-300 ease-out z-50 py-[25px]",
        {
          "transform translate-x-0": isOpen,
          "transform -translate-x-full": !isOpen,
        }
      )}
    >
      <div className="container">
        <button
          type="button"
          aria-label="toggle menu button close"
          className="text-white text-normal cursor-pointer block
        border-solid border-2 border-white hover:border-mainBlue rounded-full backdrop-blur-sm bg-mainBlue/30 hover:text-mainBlue focus:text-mainBlue active:text-mainBlue transition duration-300 ease-out p-1 ml-auto"
          onClick={handleToggle}
        >
          <IoMdClose className="h-[35px] w-[35px]" />
        </button>
        <ul className="flex flex-col items-start p-4 mt-16">
          {heroData.links.map((link, index) => (
            <li key={index} className="mb-4">
              <Link
                to={link.path}
                smooth={true}
                href="#"
                ignoreCancelEvents={true}
                className="font-normal text-base font-roboto transition-[color] duration-300 ease-out hover:text-mainBlue focus:text-mainBlue active:text-mainBlue"
                onClick={handleToggle}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
