import { styled } from '@stitches/react'

export const Container = styled('div', {
  padding: '16px 24px',
})

export const Form = styled('form', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  'button': {
    marginTop: '10px'
  }
})