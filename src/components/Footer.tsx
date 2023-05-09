import { BsFacebook, BsInstagram } from 'react-icons/bs';
export default function Footer() {
  return (
    <footer className="flex w-full justify-center gap-2 bg-slate-100 text-4xl">
      <BsFacebook className="cursor-pointer text-blue-500" />
      <BsInstagram />
    </footer>
  );
}
