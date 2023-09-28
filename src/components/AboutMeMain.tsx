import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SoftwareProjects from './SoftwareProjects'

//I am a Software Engineer, a Photographer & Unofficial Musician.
const AboutMeMain = () => {
  return (
    <div>
      <div className="section-header">
        <span className="section-title text-3xl mt-9 w-[15%]">About Me</span>
      </div>
      <div>
        <p className="text-lg">I am currently working at Mayar as a Software Engineer. Actively building commerce's & digital payment solution's web application, feature & services for growing business. </p>
      </div>
    </div>
  )
}

export default AboutMeMain