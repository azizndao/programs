import { ReactNode } from 'react'
import Header from '~/app/(dashboard)/header'
import { DashboardSideBar } from '~/app/(dashboard)/sidebar'

export default function DashbaardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <DashboardSideBar className="w-[18rem] bottom-0 top-0 left-0 right-[calc(100%-18rem)]] fixed" />
      <div className="ml-[18rem]">
        <Header className="fixed top-0 left-[18rem] right-0 bg-auto z-10 bg-[var(--bg-color)]" />
        <section className="mt-20 h-[calc(100%-5rem)] w-[calc(100%-18rem)]] block">
          {children}
        </section>
        <footer className="sticky h-96 bg-slate-900 p-6 text-slate-200">
          <a href="https://www.builder.io/" target="_blank">
            Made with ♡ by Builder.io
          </a>
        </footer>
      </div>
    </div>
  )
}
