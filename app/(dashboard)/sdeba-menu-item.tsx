'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { FC, ReactNode } from 'react'

export const SideBarMenuItem: FC<
  JSX.IntrinsicElements['a'] & { icon: ReactNode }
> = ({ className, children, icon, href, ...props }) => {
  const currentSegment = useSelectedLayoutSegment()

  const selected = href!.includes(currentSegment!)

  return (
    <li>
      <Link
        {...props}
        href={href!}
        className={clsx(
          className,
          'rounded-lg no-underline hover:no-underline transition-colors',
          'flex flex-row gap-6 items-start justify-start px-6 py-3 font-medium text-sm transition-colors',
          [
            selected
              ? 'bg-slate-800 text-white shadow-lg'
              : 'text-gray-500 hover:bg-slate-800/5',
          ]
        )}
      >
        {icon}
        {children}
      </Link>
    </li>
  )
}
