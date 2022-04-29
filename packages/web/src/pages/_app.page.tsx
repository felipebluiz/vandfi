import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '@/assets/styles/globalStyles'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
