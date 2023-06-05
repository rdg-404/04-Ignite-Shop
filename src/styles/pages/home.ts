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

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },

  strong: {
    color: '$gray300',
    fontSize: '$lg',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$gray300',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
