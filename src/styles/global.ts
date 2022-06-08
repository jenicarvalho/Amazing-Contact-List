import { createStitches, globalCss } from '@stitches/react'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      primary: '#3F9BFC',
      lightPrimary: '#F4F8FB',
      gray: '#EAECF0',
      lightGray: '#E5E5E5',
      darkGray: '#667085',
      black: '#101828',
    },
    space: {
      1: '13px 44px',
      2: '6px 22px',
    },
    fontSizes: {
      1: '14px',
    },
    fonts: {
      inter: 'Inter, apple-system, sans-serif',
    }
  },
})

const globalStyles = globalCss({
  body: {
    backgroundColor: '$lightGray',
    margin: 0,
    padding: 0,
    fontFamily: '$inter',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
})

export { globalStyles }