"use client";

import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function BtnToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      updateDashOffset();
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function updateDashOffset() {
    const element = document.getElementById("iconPath");

    if (element && element instanceof SVGGeometryElement) {
      const pageLength = element.getTotalLength();

      element.style.strokeDasharray = `${pageLength} ${pageLength}`;
      element.style.transition = "stroke-dashoffset 25ms";

      const currentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const dashOffset =
        pageLength - (window.scrollY * pageLength) / currentHeight;

      element.style.strokeDashoffset = dashOffset.toString();
    }
  }

  return (
    <div
      className={`fixed z-50 right-4 transition-opacity duration-250 cursor-pointer
        ${showTopBtn
          ? "opacity-100 bottom-20"
          : "opacity-0 pointer-events-none bottom-16"
        }
        ${showTopBtn ? "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" : ""}
        ${showTopBtn ? "rounded-full" : ""}
      `}
      onClick={goToTop}
    >
      <FaRegArrowAltCircleUp className="w-full h-full text-lightBlue hover:text-mainBlue" />
    </div>
  );
}

//test
