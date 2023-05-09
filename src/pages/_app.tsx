import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
      <Head>
        <title>New demo from app</title>
        <meta name="description" content="Demo description" />
      </Head>
      <Component {...pageProps} />
  </>
  );
  // return <Component {...pageProps} />
}
