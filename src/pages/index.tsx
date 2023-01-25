import React from 'react';
import { supabase } from '../utils/supabase';
import CustomImage from '../components/CustomImage';
import SideCard from '../components/SideCard';
import HeroImage from '../components/HeroImage';
import { Allison } from '@next/font/google';

const allison = Allison({
  weight: '400',
});

type Props = {
  images: Array<{ publicUrl: string }>;
  aboutme: Array<{ text: string }>;
  heroImage: {
    publicUrl: string;
  };
};

export async function getStaticProps() {
  let images: Array<{ publicUrl: string }> = [];
  const { data: imageNames } = await supabase.storage
    .from('images')
    .list('gallery');

  //Todo: If no images, return placeholders.

  for (let img of imageNames!) {
    const { data: imageData } = await supabase.storage
      .from('images')
      .getPublicUrl(`gallery/${img.name}`);

    images.push(imageData);
  }

  const { data: heroImage } = await supabase.storage
    .from('images')
    .getPublicUrl('mainpage/home.jpg');

  const { data: aboutme } = await supabase.from('about_me').select('text');
  return {
    props: {
      images,
      aboutme,
      heroImage,
    },
  };
}

function Index({ images, aboutme, heroImage }: Props) {
  return (
    <>
      <section>
        <HeroImage url={heroImage.publicUrl}>
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
          content={aboutme[0].text}
          href="/about-me"
          image="/favicon.ico"
          imageAlt="Me "
        />
      </section>
      <section className="container mx-auto p-10">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
          {images.map((img) => (
            <CustomImage
              alt="Image"
              height={600}
              url={img.publicUrl}
              width={600}
              key={img.publicUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Index;
