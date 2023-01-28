import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const DynamicLayout = Component.Layout || EmptyLayout;
  return (
    <DynamicLayout>
      <Component {...pageProps} />
    </DynamicLayout>
  );
}

function EmptyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
