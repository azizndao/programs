import classNames from 'classnames'
import style from './button.module.css'
import { FC, ReactNode } from 'react'
import Link from 'next/link'

export type LinkButtonProps = {
  variant?: 'fill' | 'outlined' | 'tonal'
  color?: 'primary' | 'danger' | 'secondary' | 'neutral' | 'warning'
  alignIcon?: 'start' | 'end',
  icon?: ReactNode
} & JSX.IntrinsicElements['a']

export const LinkButton: FC<LinkButtonProps> = ({
  className,
  variant = 'fill',
  color = 'primary',
  alignIcon = 'end',
  children,
  icon,
  ...props
}) => {

  const classnames = classNames(
    className,
    style.btn,
    style[`btn-${variant}`],
    style[`btn-${variant}-${color}`],
  )

  if (alignIcon === 'start') {
    return (
      <Link className={classnames} {...props}>
          {icon}
          {children}
      </Link>
    )
  }

  return (
    <Link className={classnames} {...props}>
      {children}
      {icon}
    </Link>
  )
}

