import { describe, expect, it, vitest } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import NewContact from '.'
import List from '../List'

describe("<NewContact />", () => {
  it("should show NewContact component", () => {
    
    expect(() => {
      render(<NewContact handleAddContact={() => {}} toggleContact={() => {}} />)

      screen.getByRole('form')
    }).toBeDefined()
  })
  it("should add new contact", async () => {

      const handleAddContact = vitest.fn();
      const toggleContact = vitest.fn();
    
      const { container } = render(<NewContact handleAddContact={handleAddContact} toggleContact={toggleContact} />)

      const nameInput = container.querySelector('input[name="name"]') as HTMLElement
      const emailInput = container.querySelector('input[name="email"]') as HTMLElement
      const zipInput = container.querySelector('input[name="zip"]') as HTMLElement
      const form = screen.getByRole('form') as HTMLElement

      fireEvent.change(nameInput, { target: { value: 'Richard' } });
      fireEvent.change(emailInput, { target: { value: 'rich@email.com' } });
      fireEvent.change(zipInput, { target: { value: '10001' } });
      fireEvent.submit(form)

      expect(handleAddContact).toHaveBeenCalled();
      expect(toggleContact).toHaveBeenCalled();
  })
})