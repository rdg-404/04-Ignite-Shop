import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ( (100vw - 1180px) /2 ))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('a', {
  background: 'linear-gradient(0deg, #259CA9, #149D69)',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
