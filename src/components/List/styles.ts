import { styled } from '@stitches/react'

export const Container = styled('div', {
  backgroundColor: '$white',
  width: 520,
  padding: '24px 0',
  borderRadius: 16,
  boxShadow: 'rgb(0 0 0 / 8%) 0px 4px 12px'
})

export const Actions = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 24px 0 0',

  'button + button': {
    marginLeft: 24
  }
})