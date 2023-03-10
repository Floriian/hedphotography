import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '../hooks';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { routes } from '../utils/routes';
import classNames from 'classnames';

function Menu() {
  const [isHomepage, setHomepage] = useState<boolean>();
  const bgRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const scroll = useScroll();
  useEffect(() => {
    if (window.location.pathname === '/') setHomepage(true);
    if (window.location.pathname != '/') setHomepage(false);
  }, [router.pathname]);

  //! TODO: FIND A BETTER SOLUTION FOR THIS
  //* dynamic import on layout

  useEffect(() => {
    // const opacity = 1 - (window.screen.height - scroll) / 100;
    if (isHomepage) {
      const opacity = scroll / 1000;

      if (opacity <= 0.5) {
        bgRef.current!.style.cssText += `background-color: rgba(0,0,0, 0)`;
        bgRef.current!.style.cssText = `color: rgb(255,255,255);`;
      }
      if (opacity > 0.5) {
        bgRef.current!.style.cssText = `color: rgba(0,0,0, ${opacity});`;
      }
      bgRef.current!.style.cssText += `background-color: rgba(241,245,249, ${opacity});`;
    }
  }, [scroll, isHomepage]);

  const styles = classNames({
    'w-full px-16 py-3 text-xl': true,
    'shadow-xl drop-shadow-xl':
      !isHomepage || (isHomepage && scroll / 1000 > 0.3),
  });

  const navStyle = classNames({
    'fixed flex w-full justify-center': isHomepage,
    'flex w-full justify-center': !isHomepage,
  });

  return (
    <nav className={navStyle}>
      <div
        className={styles}
        style={
          isHomepage
            ? {
                color: 'black',
              }
            : undefined
        }
        ref={bgRef}
      >
        <ul className="flex justify-center">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="rounded-full p-2 transition-colors duration-150 hover:text-slate-600"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
