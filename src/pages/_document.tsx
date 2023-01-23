import { Html, Head, Main, NextScript } from "next/document";
import Menu from "../components/Menu";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="fixed w-full">
          <Menu />
        </div>
        <div className="relative -z-10">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
