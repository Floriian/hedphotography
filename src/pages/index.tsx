import React, { useEffect } from 'react';
import Image from '../components/Image';
import SideCard from '../components/SideCard';
import HeroImage from '../components/HeroImage';
import { Allison } from '@next/font/google';

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
  return (
    <div className="relative -z-10">
      <section>
        {/* <HeroImage url={heroImage.publicUrl}>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl uppercase text-white">
            The art of{' '}
            <span className={allison.className + ' text-5xl'}>
              {' '}
              Photography
            </span>
          </h1>
        </HeroImage> */}
      </section>
      <section className="flex justify-center">
        {/* <SideCard
          content={aboutme[0].text}
          href="/about-me"
          image="/favicon.ico"
          imageAlt="Me "
        /> */}
      </section>
      <section className="container mx-auto p-10">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
          {images.map((img) => (
            <p key={img.publicUrl}>{img.publicUrl}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Index;
