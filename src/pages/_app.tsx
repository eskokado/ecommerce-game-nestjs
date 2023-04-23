import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OneBitGames-ESK</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
