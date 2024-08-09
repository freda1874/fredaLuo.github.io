import Image from 'next/image'


import { SimpleLayout } from '@/components/SimpleLayout'

import SingleProject from '../../components/SingleProject'


export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="My Projects"
      intro="Here are a few cool things I've worked on, go check them out"
    >
      < SingleProject />
    </SimpleLayout>
  )
}
