import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import camiseta01 from '../assets/camisetas/1.png'
import camiseta02 from '../assets/camisetas/2.png'
import camiseta03 from '../assets/camisetas/3.png'
import { HomeContainer, Product } from '@/styles/pages/home'

import 'keen-slider/keen-slider.min.css'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
      <Product className="keen-slider__slide">
        <Image src={camiseta01} width={520} height={480} alt=""></Image>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta02} width={520} height={480} alt=""></Image>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta03} width={520} height={480} alt=""></Image>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta03} width={520} height={480} alt=""></Image>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

// espera as informações do lado do servdidor carregar para mostrar a pagina
export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  console.log('rodou')

  return {
    props: {
      list: [1, 2, 3],
    },
  }
}
