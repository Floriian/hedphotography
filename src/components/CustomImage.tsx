import Image from "next/image";
import React from "react";

type Props = {
  url: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function CustomImage({
  url,
  alt,
  width,
  height,
  className,
}: Props) {
  return (
    <Image
      alt={alt}
      src={url}
      width={width}
      height={height}
      priority
      className={
        "aspect-square object-cover w-full h-full rounded-xl " + className
      }
    />
  );
}
