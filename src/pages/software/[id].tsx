import React from 'react'
import Layout from '@/components/Layout'
import FieldBadges from '@/components/FieldBadges'
import SocialMedias from '@/components/SocialMedias'
import Image from 'next/image'
import { techStack } from '@/lib/utils'
import SwiperDemoSoftware from '@/components/SwiperDemoSoftware'

const lsmTech = [
  {
    name: "Next JS",
    icon: techStack["next"],
    color: "text-black"
  },
  {
    name: "Tailwind",
    icon: techStack["tailwind"],
    color: "text-black"
  },
  {
    name: "Typescript",
    icon: techStack["typescript"],
    color: "text-black"
  },
]
const sourceImage = ["/lsm/lsmShow1.png", "/lsm/lsmShow2.png", "/lsm/lsmShow3.png", "/lsm/lsmShow4.png"]

const SoftwareDetail = () => {
  return (
    <Layout>
      <div className="min-h-[50vh]">
        <div className="h-28">
        </div>
        <div className="flex justify-between items-center sm:flex-row flex-col">
          <p className="text-6xl">last man standing</p>
          <Image src="/lsm/lsmBanner2.png" alt='last man standing banner' width={400} height={200} />
        </div>

        <FieldBadges fields={lsmTech} />
      </div>
      <div className="mt-28 mb-10">
        <div className="mb-10">
          <span className="section-title text-3xl mt-9 w-[10%]">Highlights</span>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p>A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto.</p>
          <p>A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto. A Web 3 based game to guess random word against others and win the prize of crypto.</p>
        </div>
      </div>
      <SwiperDemoSoftware src={sourceImage}/>
      <div className="my-10 flex flex-col gap-5">
        <hr  />
        <SocialMedias />
      </div>
    </Layout>
  )
}

export default SoftwareDetail