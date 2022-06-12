import { forwardRef, RefObject } from 'react'
import { InputStyled } from './styles'

interface Props {
  type: string,
  placeholder: string,
  required?: boolean,
  onBlur?: (e: any) => any,
  name?: string
}

const Input = ({ type, placeholder, required, onBlur, name }: Props, ref: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null ) => {
  return (
    <>
      <InputStyled type={type} name={name} placeholder={placeholder} ref={ref} required={required} onBlur={onBlur}/>
    </>
  )
}

export default forwardRef(Input)