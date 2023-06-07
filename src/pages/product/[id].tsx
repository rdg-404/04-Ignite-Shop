import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
// import { useRouter } from 'next/router'

export default function Product() {
  // const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae modi,
          suscipit quia repudiandae iste architecto reprehenderit debitis,
          itaque sapiente officiis, sequi eius quis doloremque quae delectus
          assumenda molestiae possimus impedit!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
