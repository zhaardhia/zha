import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import Stuff from '@/components/Stuff'
import AboutMeMain from '@/components/AboutMeMain'
import FadeBox from '@/components/FadeBox'
import FieldBadges from '@/components/FieldBadges'
import SocialMedias from '@/components/SocialMedias'
import { mainPersonalFields } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Intro
        headerTitle="hi, it’s firzha."
        childTitle="crafting digital solutions & making art."
      />
      <FieldBadges fields={mainPersonalFields} />
      <FadeBox>
        <Stuff />
        <AboutMeMain />
        <div className="my-10 flex flex-col gap-5">
          <hr  />
          <SocialMedias />
        </div>
      </FadeBox>
    </Layout>
  )
}
