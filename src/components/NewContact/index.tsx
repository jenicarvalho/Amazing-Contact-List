import { useCallback, useRef } from 'react'
import ContactService from '../../services/contact-service'
import { getRandomInt } from '../../utils/functions'
import { ContactTypes } from '../../types/contact'
import { Button } from '../UI/Button/styles'
import Input from '../UI/Input'
import { Container, Form } from './styles'

interface Props {
  handleAddContact: (data: ContactTypes) => void,
  toggleContact: () => void
}

const NewContact = ({ handleAddContact, toggleContact }: Props) => {
  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const zipInput = useRef<HTMLInputElement>(null)

  const formHandler = useCallback(
    () => (event: React.SyntheticEvent) => {
      event.preventDefault()

      const data = {
        id: getRandomInt(0, 8),
        username: emailInput.current?.value,
        name: nameInput.current?.value,
        email: emailInput.current?.value,
        address: {
          zipcode: zipInput.current?.value
        }
      }

      try {
        ContactService.postContact(data).then(res => res)
        handleAddContact(data)
        toggleContact()
      } catch (error) {
        console.log(error)
      }
    },
    []
  )

  return (
    <Container>
      <h2>Add new contact</h2>
      <Form onSubmit={formHandler()}>
        <Input type='text' placeholder='Name' ref={nameInput} />
        <Input type='text' placeholder='Email' ref={emailInput} />
        <Input type='text' placeholder='Zip code' ref={zipInput} />
        <Button color='primary' role='button' size='small'>Save</Button>
      </Form>
    </Container>
  )
}

export default NewContact