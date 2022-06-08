import { styled } from '@stitches/react'

export const InputStyled = styled('input', {
  width: '100%',
  height: '40px',
  border: 'none',
  borderBottom: '1px solid $lightGray',
  outline: 'none',
  textIndent: '10px',

  '&:focus': {
    borderColor: '$darkGray'
  }
})
