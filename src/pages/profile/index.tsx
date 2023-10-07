import React from 'react'
import Layout from '@/components/Layout'
import HeaderMe from '@/components/profile/HeaderMe'
import Experience from '@/components/profile/Experience'
import Projects from '@/components/profile/Projects'
import SocialMediaFormal from '@/components/SocialMediaFormal'
import SocialMedias from '@/components/SocialMedias'
import FadeBox from '@/components/FadeBox'
import { Button } from '@/components/ui/button'

const index = () => {
  return (
    <Layout>
      <div className="">
        <div className="h-28">
        </div>
        {/* <FieldBadges fields={softwareFields} /> */}
        {/* <SoftwareSections /> */}
        <FadeBox>
          <div className="flex justify-between sm:flex-row flex-col items-start gap-5">
            <HeaderMe />
            <SocialMediaFormal />
          </div>
        </FadeBox>
      </div>
      <FadeBox>
        <div className="mb-20 mt-16 flex flex-col gap-5">
          <p className="text-2xl text-[#16161a]">Hi!👋</p>
          <p className="text-[#16161a]">I'm Firzha, a Software Engineer / Frontend & Backend Engineer / Digital Crafter, passionate building digital tech product, intuitive, attractive and visually stunning software for business solution. Currently working with Javascript / TypeScript ecosystems.</p>
          <p className="text-[#16161a]">Throughout my professional journey, I've cultivated a proficiency in crafting technological solutions that not only enhance user satisfaction but also play a substantial role in accomplishing key business goals.</p>
          <div className="flex flex-col gap-2">
            <p className="text-[#16161a]">I'm open to any freelance role, related to Software Engineering🙌</p>
            <Button variant="outline" className="w-[11rem]">
              <a href="/CV.pdf" download="CVFirzha.pdf">
                Here's my latest CV!
              </a>
            </Button>
          </div>
        </div>
      </FadeBox>
      <FadeBox>
        <div className="my-20 flex flex-col gap-5">
          <p className="text-2xl">Experience</p>
          <Experience />
        </div>
      </FadeBox>
      <FadeBox>
        <div className="my-20 flex flex-col gap-5">
          <p className="text-2xl">Projects / Portfolio</p>
          <Projects />
        </div>
      </FadeBox>
      <div className="my-10 flex flex-col gap-5">
        <hr  />
        <SocialMedias />
      </div>
    </Layout>
  )
}

export default index