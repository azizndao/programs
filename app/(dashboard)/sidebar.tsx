import {
  AdjustmentsHorizontalIcon,
  BellIcon,
  CalendarDaysIcon,
  ChatBubbleLeftIcon,
  Cog8ToothIcon,
  FolderIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { FC } from 'react'
import { SideBarFooter } from '~/app/(dashboard)/sidebar-footer'
import { QwikLogo } from '~/components/icons/qwik'
import { SideBarMenuItem } from './sdeba-menu-item'

export const DashboardSideBar: FC<JSX.IntrinsicElements['div']> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames('flex flex-col py-6 bg-white', className)}
      {...props}
    >
      <div className="mx-6 my-6">
        <QwikLogo />
      </div>
      <SidebarMenu />
      <SideBarFooter />
    </div>
  )
}

const SidebarMenu = () => {
  return (
    <div className="space-y-6 grow px-8">
      <section>
        <h3 className="ml-4 font-medium mb-4">MENU</h3>
        <ul className="space-y-2">
          <SideBarMenuItem icon={<HomeIcon className="h-6 w-6" />} href="/">
            Overview
          </SideBarMenuItem>
          <SideBarMenuItem
            icon={<FolderIcon className="h-6 w-6" />}
            href="/projects"
          >
            Projects
          </SideBarMenuItem>
          <SideBarMenuItem
            icon={<CalendarDaysIcon className="h-6 w-6" />}
            href="/calender"
          >
            Calender
          </SideBarMenuItem>
          <SideBarMenuItem
            icon={<AdjustmentsHorizontalIcon className="h-6 w-6" />}
            href="/admin"
          >
            Admin
          </SideBarMenuItem>
          <SideBarMenuItem
            icon={<ChatBubbleLeftIcon className="h-6 w-6" />}
            href="/messages"
          >
            Messages
          </SideBarMenuItem>
        </ul>
      </section>
      <section>
        <h3 className="ml-4 font-medium my-4">SUPPORT</h3>
        <ul className="space-y-2">
          <SideBarMenuItem
            icon={<Cog8ToothIcon className="h-6 w-6" />}
            href="/settings"
          >
            Settings
          </SideBarMenuItem>
          <SideBarMenuItem
            icon={<BellIcon className="h-6 w-6" />}
            href="/notifications"
          >
            Notifications
          </SideBarMenuItem>
          <SideBarMenuItem
            icon={<QuestionMarkCircleIcon className="h-6 w-6" />}
            href="/help"
          >
            Help
          </SideBarMenuItem>
        </ul>
      </section>
    </div>
  )
}
