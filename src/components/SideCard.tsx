import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  image?: string;
  imageAlt?: string;
  content: string;
  href: string;
};

export default function SideCard({ image, imageAlt, content, href }: Props) {
  return (
    <div className="m-2 mt-5 w-auto rounded-xl border-gray-400 bg-white p-5 shadow-md shadow-black transition-all duration-300">
      <div className="flex">
        {image && imageAlt ? (
          <Image
            src={image}
            width={64}
            height={64}
            alt={imageAlt}
          />
        ) : null}
        <p className="ml-2 w-full max-w-sm text-justify">
          <span className="text-lg font-bold">Hey!</span>
          <br />
          <span className="hidden md:block">
            {content.slice(0, 120)}
            <Link
              href={href}
              className="text-blue-800 transition-colors duration-100 hover:text-blue-900"
            >
              ...Tovább
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
