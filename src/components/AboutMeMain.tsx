import React from 'react'
import FadeBox from './FadeBox'
import { Button } from "@/components/ui/button"
import { Icon } from '@iconify/react'
import Link from 'next/link'
//I am a Software Engineer, a Photographer & Unofficial Musician.
const AboutMeMain = () => {
  return (
    <FadeBox>
      <div className="section-header">
        <span className="section-title text-3xl mt-9 w-[15%]">About Me</span>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-md">I am currently working at <a href="https://mayar.id" target='_blank' className="font-bold">Mayar</a> as a Software Engineer, actively building commerce's & digital payment solution's web application, feature & services for growing business. </p>
        <p className="text-md">Outside of work, I'm interested in photography, doing lots of street photography and portraits. I also working as unofficial musician😅, a full time bedroom musician creating some beats, writing songs and hope that'll going to stage (again).</p>
      </div>
      <Link href="/profile">
        <Button variant="outline" className="mt-10 rounded-xl hover:bg-slate-50">View Profile & Resume <Icon icon="grommet-icons:next" className="ml-1" /></Button>
      </Link>
    </FadeBox>
  )
}

export default AboutMeMain