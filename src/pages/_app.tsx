import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import LogoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <img src={LogoImg.src} alt="Ignite Logo" />
      </div>

      <Component {...pageProps} />
    </div>
  )
}
