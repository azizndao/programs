import classNames from 'classnames'
import { Loading } from '../icons/loader'
import style from './button.module.css'
import { ReactNode } from 'react'

export type ButtonProps = {
  variant?: 'fill' | 'outlined' | 'tonal'
  color?: 'primary' | 'danger' | 'secondary' | 'neutral' | 'warning'
  loading?: boolean
  alignIcon?: 'start' | 'end',
  icon?: ReactNode
} & JSX.IntrinsicElements['button']

export const Button = ({
  className,
  variant = 'fill',
  color = 'primary',
  alignIcon = 'end',
  icon,
  loading,
  children,
  ...props
}: ButtonProps) => {

  const classnames = classNames(
    className,
    style.btn,
    style[`btn-${variant}`],
    style[`btn-${variant}-${color}`],
    loading ? style['btn-loading'] : ''
  )

  if (loading) {
    return (
      <button className={classnames} {...props}>
        <Loading className="animate-spin w-5 h-5"/>
        <span>Loading...</span>
      </button>
    )
  }

  if (alignIcon === 'start') {
    return (
      <button className={classnames} {...props}>
        {icon}
        {children}
      </button>
    )
  }

  return (
    <button className={classnames} {...props}>
      {children}
      {icon}
    </button>
  )
}

