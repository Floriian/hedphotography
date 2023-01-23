import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useScroll } from "../hooks";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

function Menu() {
  const scroll = useScroll();
  useEffect(() => console.log(scroll), [scroll]);

  return (
    <nav
      className={
        scroll <= 200 ? "w-full flex bg-blue-500" : "w-full flex bg-red-500"
      }
    >
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
          className="p-2  hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Főoldal
        </Link>
        <Link
          href="/about-me"
          className="p-2  hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Rólam
        </Link>
        <Link
          href="/galery"
          className="p-2  hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Galéria
        </Link>
        <Link
          href="/contact"
          className="p-2  hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Kapcsolat
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
