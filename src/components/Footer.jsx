import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/Container'
import Image from 'next/image'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-10 flex-none">
      <ContainerOuter>
        <div className="flex justify-center mb-1">
          <Image
            src="/images/photos/programmer.gif"
            className="h-40 w-40 object-cover"
            width={160}
            height={160}
            alt="thanks"
          />
        </div>
        <p className="w-1/3 mx-auto text-center mt-0 text-base text-zinc-600 dark:text-zinc-400 mb-4">
          Thank you for reading!
        </p>

        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="#">About Me</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Freda Luo. All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
