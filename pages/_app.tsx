import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nika Gotsiridze | Portfolio</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="./images/logo.svg"
        />
        <meta
          name="description"
          content="Full stack developer portfolio for building websites."
        />
        <meta name="keywords" content="Portfolio, Developer, React, Full Stack, Frontend, Backend" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
