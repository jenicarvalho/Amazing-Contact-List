import { forwardRef, RefObject } from 'react'
import { InputStyled } from './styles'

interface Props {
  type: string,
  placeholder: string,
  required?: boolean,
  onBlur?: (e: any) => any
}

const Input = ({ type, placeholder, required, onBlur }: Props, ref: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null ) => {
  return (
    <>
      <InputStyled type={type} placeholder={placeholder} ref={ref} required={required} onBlur={onBlur}/>
    </>
  )
}

export default forwardRef(Input)