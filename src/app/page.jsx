/* eslint-disable @next/next/no-img-element */


import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

import TechStack from '../components/TechStack'
import Projects from './projects/page'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1 flex items-center gap-2" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      <span>{props.children}</span>
    </Link>
  )
}

function Photos() {
  return (
    <div className="hidden lg:block mt-16 sm:mt-20">
      <div className="-my-4 flex justify-evenly gap-5 overflow-hidden py-4 sm:gap-8">
        <div
          key="/images/photos/coding.gif"
          className={clsx(
            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800'
          )}
        >
          <img
            src="/images/photos/coding.gif"
            alt="Coding girl"
            sizes="(min-width: 640px) 18rem, 11rem"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Container className="lg:-mt-20 mt-5">
        <div className="flex flex-col sm:flex-row justify-normal items-end">
          <div id="about" className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Hi there! Welcome to my portfolio
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I'm Freda Luo, a recent programmer graduate. I started in product management, for years focusing on the "why" behind products. My curiosity for the "how" led me to pursue software development, and I'm now committed to becoming a full-stack developer.
            </p> <div className="mt-6 flex gap-6 items-center">
              <SocialLink
                href="https://github.com/freda1874?tab=repositories"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/lei-luo-freda/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
              <SocialLink
                href="mailto:freda.luo@gmail.com"
                icon={MailIcon}
                className="flex items-center gap-2"
              >

              </SocialLink>
              <p className="-ml-7 text-base text-zinc-600 dark:text-zinc-400 font-semibold"> freda.luo@gmail.com</p>
            </div>
          </div>
          <div className="sm:mt-0 sm:ml-6">
            <Photos />
          </div>
        </div>
      </Container >

      <Container id="skills" className="mt-10 md:mt-28">
        <TechStack />
      </Container>

      <Container id="projects" className="mt-4 md:mt-6">
        <Projects />
      </Container>
    </>
  )
}
