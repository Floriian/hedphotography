import dynamic from 'next/dynamic';

const Menu = dynamic(() => import('./Menu'), {
  ssr: false,
});

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
}
