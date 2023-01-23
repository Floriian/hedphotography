import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image?: string;
  imageAlt?: string;
  content: string;
  href: string;
};

export default function SideCard({ image, imageAlt, content, href }: Props) {
  return (
    <div className="w-auto p-5 m-2 mt-5 border-gray-400 shadow-black shadow-md rounded-xl transition-all duration-300 bg-white">
      <div className="flex">
        {image && imageAlt ? (
          <Image src={image} width={64} height={64} alt={imageAlt} />
        ) : null}
        <p className="text-justify max-w-sm ml-2 w-full">
          <span className="text-lg font-bold">Hey!</span>
          <br />
          <span className="hidden md:block">
            {content.slice(0, 120)}
            <Link
              href={href}
              className="text-blue-800 hover:text-blue-900 duration-100 transition-colors"
            >
              ...Tovább
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
