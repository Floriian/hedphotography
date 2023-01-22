import Image from "next/image";
import Link from "next/link";

function Menu() {
  return (
    <nav className="w-full flex">
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
          className="p-2 text-black hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Főoldal
        </Link>
        <Link
          href="/about-me"
          className="p-2 text-black hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Rólam
        </Link>
        <Link
          href="/galery"
          className="p-2 text-black hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Galéria
        </Link>
        <Link
          href="/contact"
          className="p-2 text-black hover:text-gray-600 hover:underline-offset-2 hover:underline transition-colors duration-150"
        >
          Kapcsolat
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
