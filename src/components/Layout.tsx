import Menu from './Menu';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="fixed w-full">
        <Menu />
      </div>
      <div className="relative -z-10">{children}</div>
    </>
  );
}
