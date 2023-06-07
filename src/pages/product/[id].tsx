import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
  }
}

export default function Product() {
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

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['deafult_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount ? price.unit_amount / 100 : 0),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
