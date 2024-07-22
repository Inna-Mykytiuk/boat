import React from "react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const iconComponents = {
  FaFacebookF,
  AiFillInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
  FaTelegramPlane,
};

export type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: keyof typeof iconComponents;
  hoverColor: string;
};

interface SocialLinksProps {
  socialLinks: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  return (
    <ul className="text-white grid grid-cols-3 gap-4">
      {socialLinks.map((link, index) => {
        const IconComponent = iconComponents[link.icon];
        const baseColor = "text-dark";
        const hoverColor = link.hoverColor;

        return (
          <li
            key={index}
            className="group flex items-center justify-center cursor-pointer transition duration-300 ease-out w-full h-full"
          >
            <a
              href={link.href}
              aria-label={link.ariaLabel}
              className={`flex items-center justify-center ${baseColor} h-[35px] w-[35px] bg-white p-1 rounded-full`}
            >
              <IconComponent
                className={`h-[25px] w-[25px] ${hoverColor} transition duration-300 ease-out`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
