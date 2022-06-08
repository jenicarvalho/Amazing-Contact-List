import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '16px 24px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background .4s ease',
  
  '~ div': {
    borderTop: '1px solid $lightGray',
  },

  '&:hover': {
    backgroundColor: '$lightPrimary'
  }
})

export const Info = styled('div', {
  marginLeft: 12,
  fontSize: '$fontSizes$1',

  variants: {
    right: {
      true: {
        marginLeft: 'auto'
      }
    }
  },
  
  'strong': {
    color: '$black',
    display: 'block',
    fontWeight: 500,
    lineHeight: '20px',
  },
  
  'span': {
    color: '$darkGray'
  }
})
