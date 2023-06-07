import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: '1180',
  margin: '0 auto ',
})

export const ImageContainer = styled('div', {})

export const ProductDetails = styled('div', {})
