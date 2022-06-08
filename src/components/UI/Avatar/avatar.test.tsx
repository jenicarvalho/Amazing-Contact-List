import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Avatar from '.'

describe("<Avatar />", () => {
  it("should show avatar component", () => {
    const url = "https://cdn.lorem.space/images/game/.cache/40x40/life-is-strange.jpeg"
    
    expect(() => {
      render(<Avatar url={url} />)

      screen.getAllByAltText('avatar')
    }).toBeDefined()
  })
  
  it("should throw if there is no avatar", () => {
    
    expect(() => {
      render(<Avatar url='' />)
      
      screen.getAllByAltText('avatar')
    }).toThrow('URL should not be empty')
  })
})