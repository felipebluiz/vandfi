import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastProvider } from '../providers/ToastProvider'
import { GlobalStyle } from '@/assets/styles/global'
import { theme } from '../../stitches.config'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  GlobalStyle()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="theme-color" content="#3366EF" />
        <meta name="application-name" content="Vandfi" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <ToastProvider>
        <NextNProgress
          height={3}
          color={theme.colors.primary.value}
          showOnShallow={false}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default MyApp
