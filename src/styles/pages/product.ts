import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto ',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(0deg, #259CA9, #149D69)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {})
