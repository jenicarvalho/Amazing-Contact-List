import { useEffect, useState } from 'react'
import { ContactTypes } from '../../types/contact'
import { Container, Actions } from './styles'
import ListItem from './ListItem'
import { Button } from '../UI/Button/styles'
import ContactService from '../../services/contact-service'
import NewContact from '../NewContact'

const List = () => {
  const [contacts, setContacts] = useState<ContactTypes[]>([])
  const [showAddContact, setShowAddContact] = useState<Boolean>(false)

  const getContacts = () => {
    try {
      ContactService.getContacts().then(res => setContacts(res.data.slice(0, 5)))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getContacts()
  }, [])

  const handleAddContact = (data: ContactTypes) => setContacts(initialState => [...initialState, data])

  const toggleContact = () => setShowAddContact(initialState => !initialState)

  return (
    <Container role='list'>
      { showAddContact ? 
        <NewContact handleAddContact={handleAddContact} toggleContact={toggleContact} /> :
        contacts?.map(contact => <ListItem contact={contact} key={contact.username} />)
      }
      <Actions>
        { showAddContact ? 
          <Button outlined role='button' onClick={toggleContact} size='medium'>Back</Button> :
          <Button color='primary' role='button' onClick={toggleContact} size='medium'>Add New</Button>
        }
      </Actions>
    </Container>
  )
}

export default List