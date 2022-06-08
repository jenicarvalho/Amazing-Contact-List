import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './styles'

describe("<Button />", () => {
  it("should show Button component", () => {
    
    expect(() => {
      render(<Button>Click</Button>)

      screen.getByText('Click')
    }).toBeDefined()
  })
})