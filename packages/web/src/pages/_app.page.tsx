import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '@/assets/styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  GlobalStyle()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
