import React from 'react';
import SideCard from '../components/SideCard';
import HeroImage from '../components/HeroImage';
import { Allison } from '@next/font/google';
import Image from 'next/image';
import serverFetch from '../utils/fetch';
import Footer from '../components/Footer';

const allison = Allison({
  weight: '400',
});

type Props = {
  images: Array<{ name: string; publicUrl: string }>;
};

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/getGalleryImages`,
  );
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
          href="/about-me"
          image="/favicon.ico"
          imageAlt="Me "
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla accusantium possimus totam aspernatur dolorum ullam. Vel velit ducimus at quia ea doloribus quasi dolorum officia. In ducimus culpa nulla."
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
      <Footer />
    </div>
  );
}

export default Index;
