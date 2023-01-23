import Image from "next/image";
import React from "react";

type Props = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export default function CustomImage({ url, alt, width, height }: Props) {
  return (
    <Image
      alt={alt}
      src={url}
      width={width}
      height={height}
      priority
      className="aspect-square object-cover w-full h-full rounded-xl"
    />
  );
}
