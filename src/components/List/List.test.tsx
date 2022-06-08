import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import List from '.'

describe("<List />", () => {
  it("should show List component", () => {
    
    expect(() => {
      render(<List />)

      screen.getByRole('list')
    }).toBeDefined()
  })
  it("should show List component with all items", () => {
    
    expect(async () => {
      render(<List />)

      await screen.findAllByRole('listitem')
    }).toBeDefined()
  })
})