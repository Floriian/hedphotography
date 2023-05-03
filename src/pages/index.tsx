import React, { useEffect } from 'react';
import SideCard from '../components/SideCard';
import HeroImage from '../components/HeroImage';
import { Allison } from '@next/font/google';
import ShowCase from '../components/ShowCase';
import Image from 'next/image';

const allison = Allison({
  weight: '400',
});

type Props = {
  images: Array<{ name: string; publicUrl: string }>;
};

export async function getStaticProps() {
  const response = await fetch('http://Localhost:3000/api/getGalleryImages');
  const images = await response.json();
  return {
    props: {
      images,
    },
  };
}

function Index({ images }: Props) {
  const splittedArray: Array<{ name: string; publicUrl: string }>[] =
    images.reduce((acc, curr, i) => {
      const index = Math.floor(i / 3);
      acc[index] = acc[index] || [];
      //@ts-ignore
      acc[index].push(curr);
      return acc;
    }, []);

  return (
    <div className="relative -z-10">
      <section>
        <HeroImage url="/header.jpg">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl uppercase text-white">
            The art of{' '}
            <span className={allison.className + ' text-5xl'}>
              {' '}
              Photography
            </span>
          </h1>
        </HeroImage>
      </section>
      <section className="flex justify-center">
        <SideCard
          content="ipsum"
          href="/about-me"
          image="/favicon.ico"
          imageAlt="Me "
        />
      </section>
      <section className="flex justify-center ">
        <div className="max-w-6xl grid-cols-2 gap-2 md:grid md:grid-cols-4">
          {splittedArray.map((arr, i) => (
            <div
              className="grid gap-2"
              key={i}
            >
              {arr.map((img, i) => (
                <div key={img.publicUrl}>
                  <Image
                    width={1920}
                    height={1080}
                    className="h-full max-w-full rounded-lg object-cover"
                    alt="Gallery image"
                    src={img.publicUrl}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Index;
