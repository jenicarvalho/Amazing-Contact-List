import { forwardRef, RefObject } from 'react'
import { InputStyled } from './styles'

interface Props {
  type: string,
  placeholder: string
}

const Input = ({ type, placeholder }: Props, ref: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null ) => {
  return (
    <>
      <InputStyled type={type} placeholder={placeholder} ref={ref} />
    </>
  )
}

export default forwardRef(Input)