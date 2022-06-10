import { useCallback, useRef, useState, RefObject } from 'react'
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
interface Ref {
  current?: object,
  value: string
}

const NewContact = ({ handleAddContact, toggleContact }: Props) => {

  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState([])

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

  const onBlurHandler = (ref: RefObject<Ref>) => {
    if (ref.current?.value !== "") {
     return setDisabled(false)
    }  
    setDisabled(true)
 }


  return (
    <Container>
      <h2>Add new contact</h2>
      <Form onSubmit={formHandler()}>
        <Input type='text' placeholder='Name' ref={nameInput} required onBlur={() => onBlurHandler(nameInput)} />
        <Input type='email' placeholder='Email' ref={emailInput} required onBlur={() => onBlurHandler(emailInput)} />
        <Input type='text' placeholder='Zip code' ref={zipInput}  />
        <Button color='primary' role='button' size='small' disabled={disabled}>Save</Button>
      </Form>
    </Container>
  )
}

export default NewContact