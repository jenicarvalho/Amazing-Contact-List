import { styled } from '@stitches/react'

export const Button = styled('button', {
  borderRadius: 10,
  cursor: 'pointer',
  border: '1px solid transparent',
  fontSize: 14,
  transition: 'background .4s ease',

  variants: {
    size: {
      medium: {
        padding: '$space$1'
      },
      small: {
        padding: '$space$2'
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
        color: 'white',
        '&:hover': {
          backgroundColor: '$black',
        },
      },
    },
    outlined: {
      true: {
        color: '$darkGray',
        backgroundColor: 'transparent',
        borderColor: '$lightGray',
        '&:hover': {
          backgroundColor: '$lightGray',
        },
      },
    },
  },

  '&:disabled': {
    background: '$lightGray',
    color: '$black',
    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: 'lightGray',
    }
  },

})