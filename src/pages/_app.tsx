import '../styles/globals.css'
import HeaderPageCustom from '../pages/header'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeaderPageCustom />
      <Component {...pageProps} />
    </Provider>
  )
}