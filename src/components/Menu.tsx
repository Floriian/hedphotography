import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '../hooks';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

function Menu() {
  const [isHomepage, setHomepage] = useState<boolean>();
  const bgRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const scroll = useScroll();

  //TODO with classnames.

  useEffect(() => {
    if (router.pathname === '/') setHomepage(true);
    if (router.pathname != '/') setHomepage(false);
  }, [router.pathname]);

  useEffect(() => {
    // const opacity = 1 - (window.screen.height - scroll) / 100;
    const opacity = scroll / 1000;

    if (opacity <= 0.5) {
      bgRef.current!.style.cssText += `background-color: rgba(0,0,0, 0)`;
      bgRef.current!.style.cssText = `color: rgb(255,255,255);`;
    }
    if (opacity > 0.5) {
      bgRef.current!.style.cssText = `color: rgba(0,0,0, ${opacity});`;
    }
    bgRef.current!.style.cssText += `background-color: rgba(241,245,249, ${opacity});`;
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
