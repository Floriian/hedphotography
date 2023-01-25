import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '../hooks';
import React, { useEffect, useRef, useState } from 'react';

function Menu() {
  const scroll = useScroll();
  const bgRef = useRef<HTMLDivElement>(null);
  //TODO with classnames.
  useEffect(() => {
    // const opacity = 1 - (window.screen.height - scroll) / 100;
    const opacity = scroll / 1000;

    if (scroll === 0) {
      bgRef.current!.style.cssText += `background-color: rgba(0,0,0, 0)`;
      bgRef.current!.style.color = 'white';
    }

    if (scroll > 0) {
      bgRef.current!.style.color = 'black';
    }

    bgRef.current!.style.cssText += `background-color: rgba(241,245,249, ${opacity})`;
  }, [scroll]);

  return (
    <nav className="flex w-full justify-center">
      <div
        className="m-10 w-fit rounded-full px-16 py-3 text-xl"
        ref={bgRef}
      >
        <ul className="flex">
          <li>
            <Link
              href="/"
              className="rounded-full p-2 transition-colors duration-150 hover:text-slate-600"
            >
              Főoldal
            </Link>
          </li>
          <li>
            <Link
              href="/about-me"
              className="rounded-full p-2 transition-colors duration-150 hover:text-slate-600"
            >
              Rólam
            </Link>
          </li>
          <li>
            <Link
              href="/galery"
              className="rounded-full p-2 transition-colors duration-150 hover:text-slate-600"
            >
              Galéria
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded-full p-2 transition-colors duration-150 hover:text-slate-600"
            >
              Kapcsolat
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
