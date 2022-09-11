import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import { GlobalStyle } from '@/assets/styles/global'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ToastProvider } from '../providers/ToastProvider'

config.autoAddCss = false

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  GlobalStyle()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default MyApp
