import Avatar from '../../UI/Avatar'
import { Container, Info } from './styles'
import { ContactTypes, RandomAvatarEnum } from '../../../types/contact'

interface Props {
  contact: ContactTypes
}

const ListItem = ({ contact }: Props) => {
  const { name, email, address } = contact

  return (
    <Container role='listitem'>
      <Avatar url={`https://api.lorem.space/image/${RandomAvatarEnum[contact.id]}?w=40&h=40`} />
      <Info>
        <strong>{name}</strong>
        <span>{email}</span>
      </Info>
      <Info right>
        <span>{address.zipcode}</span>
      </Info>
    </Container>
  )
}

export default ListItem