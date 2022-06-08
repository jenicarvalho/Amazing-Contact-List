import { Img } from './styles'

interface Props {
  url: string
}

const Avatar = ({ url }: Props) => {
  
  if(url === '') {
    throw new Error('URL should not be empty')
  }
  return <Img src={url} alt='avatar' />
}

export default Avatar