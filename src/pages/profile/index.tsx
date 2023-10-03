import React from 'react'
import Layout from '@/components/Layout'
import HeaderMe from '@/components/profile/HeaderMe'
import Experience from '@/components/profile/Experience'
import Projects from '@/components/profile/Projects'
import SocialMediaFormal from '@/components/SocialMediaFormal'
import SocialMedias from '@/components/SocialMedias'

const index = () => {
  return (
    <Layout>
      <div className="">
        <div className="h-28">
        </div>
        {/* <FieldBadges fields={softwareFields} /> */}
        {/* <SoftwareSections /> */}
        <div className="flex justify-between items-start gap-5">
          <HeaderMe />
          <SocialMediaFormal />
        </div>
      </div>
      <div className="mb-20 mt-16 flex flex-col gap-5">
        <p className="text-2xl text-[#16161a]">Hi!</p>
        <p className="text-[#16161a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti porro nulla nobis hic! Libero nisi eaque voluptates placeat ipsum, optio, ratione deleniti enim aliquam nihil autem obcaecati eius similique?</p>
        <p className="text-[#16161a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti porro nulla nobis hic! Libero nisi eaque voluptates placeat ipsum, optio, ratione deleniti enim aliquam nihil autem obcaecati eius similique?</p>
      </div>
      <div className="my-20 flex flex-col gap-5">
        <p className="text-2xl">Experience</p>
        <Experience />
      </div>
      <div className="my-20 flex flex-col gap-5">
        <p className="text-2xl">Projects / Portfolio</p>
        <Projects />
      </div>
      {/* <div className="my-20 flex flex-col gap-5">
        <p className="text-2xl">Skills</p>
        <Experience />
      </div> */}
      <div className="my-10 flex flex-col gap-5">
        <hr  />
        <SocialMedias />
      </div>
    </Layout>
  )
}

export default index