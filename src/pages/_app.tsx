import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import LogoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="Ignite Logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
