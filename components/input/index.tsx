import classNames from 'classnames'
import style from './input.module.css'
import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  error?: string
  label?: string
  register?: UseFormRegisterReturn
} & JSX.IntrinsicElements['input']

export const Input: FC<InputProps> = ({ error, label, id, register, ...props }) => {
  return (
    <fieldset className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...props} className={classNames(style['input-field'])} {...register}/>
      {error && <small>{error}</small>}
    </fieldset>
  )
}

