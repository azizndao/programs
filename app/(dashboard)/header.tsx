import { QwikLogo } from '~/components/icons/qwik'
import { UserUser } from './user-dropdown'
import classNames from 'classnames'

export default function Header({ className, ...props }: JSX.IntrinsicElements['header']) {
  return (
    <header
      className={classNames(
        'h-20 flex items-center gap-6 px-6',
        className,
      )}
      {...props}
    >
      <div className="logo">
        <a
          href="https://qwik.builder.io/"
          target="_blank"
          title="qwik"
          rel="noopener"
        >
          <QwikLogo/>
        </a>
      </div>
      <ul className="grow flex gap-4 m-4 justify-end">
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
            rel="noopener"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
            rel="noopener"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
            rel="noopener"
          >
            Tutorials
          </a>
        </li>
      </ul>
      <UserUser/>
    </header>
  )
}
