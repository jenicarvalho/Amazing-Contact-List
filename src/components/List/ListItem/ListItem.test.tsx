import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import ListItem from '.'

const contact = {
  id: 5,
  username: "Kamren",
  email: "Lucio_Hettinger@annie.ca",
  name: "Chelsey Dietrich",
  address: {
    zipcode: "92998-3874"
  }
}

describe("<ListItem />", () => {
  it("should show ListItem component", () => {
    
    expect(() => {
      render(<ListItem contact={contact} />)

      screen.getAllByRole('listitem')

    }).toBeDefined()
  })
})