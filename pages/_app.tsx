// These styles apply to every route in the application
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

import '../styles/globals.css'

const misans = localFont({
  src: [{
    path: '../fonts/MiSans-Thin.ttf',
    weight: '100',
    style: 'thin',
  }, {
    path: '../fonts/MiSans-Normal.ttf',
    weight: '300',
    style: 'normal',
  }, {
    path: '../fonts/MiSans-Medium.ttf',
    weight: '500',
    style: 'medium',
  }, {
    path: '../fonts/MiSans-Bold.ttf',
    weight: '700',
    style: 'bold',
  }, {
    path: '../fonts/MiSans-Heavy.ttf',
    weight: '900',
    style: 'heavy',
  }]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={misans.className}>
      <Component {...pageProps} />
    </main>
  )
}
