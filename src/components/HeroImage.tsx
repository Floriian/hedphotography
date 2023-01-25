import Image from 'next/image';

type Props = {
  url: string;
  children: React.ReactNode;
};
export default function HeroImage({ url, children }: Props) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={url}
        alt="Hero image"
        width={1920}
        height={1080}
        className="max-h-[840px] w-full rounded-b-xl object-cover"
        loading="lazy"
      />
      {children}
    </div>
  );
}
