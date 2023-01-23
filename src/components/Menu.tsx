import Image from "next/image";
import Link from "next/link";
import { useScroll } from "../hooks";
import React, { useEffect, useRef, useState } from "react";

function Menu() {
  const scroll = useScroll();
  const bgRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // const opacity = 1 - (window.screen.height - scroll) / 100;
    const opacity = scroll / 1000;

    if (scroll === 0) {
      bgRef.current!.style.cssText += `background-color: rgba(0,0,0, 0)`;
      bgRef.current!.style.color = "white";
    }

    if (scroll > 0) {
      bgRef.current!.style.color = "black";
    }

    bgRef.current!.style.cssText += `background-color: rgba(241,245,249, ${opacity})`;
  }, [scroll]);

  return (
    <nav className="w-full flex text-black" ref={bgRef}>
      <Image
        alt="Logo"
        src="/favicon.ico"
        width={64}
        height={64}
        className="p-2"
      />
      <div className="flex w-full justify-center m-5">
        <Link
          href="/"
          className="p-2  hover:text-gray-600  transition-colors duration-150"
        >
          Főoldal
        </Link>
        <Link
          href="/about-me"
          className="p-2  hover:text-gray-600  transition-colors duration-150"
        >
          Rólam
        </Link>
        <Link
          href="/galery"
          className="p-2  hover:text-gray-600  transition-colors duration-150"
        >
          Galéria
        </Link>
        <Link
          href="/contact"
          className="p-2  hover:text-gray-600  transition-colors duration-150"
        >
          Kapcsolat
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
