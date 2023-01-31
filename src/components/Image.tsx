import * as NextImage from 'next/image';
import React from 'react';

type Props = {
  url: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function Image({ url, alt, width, height, className }: Props) {
  return (
    <NextImage.default
      alt={alt}
      src={url}
      width={width}
      height={height}
      priority
      className={
        'aspect-square h-full w-full rounded-xl object-cover ' + className
      }
    />
  );
}
