import React from 'react'
import Layout from '@/components/Layout'
import FieldBadges from '@/components/FieldBadges'
import { softwareFields } from '@/lib/utils'
import SoftwareSections from '@/components/softwares/SoftwareSections'
import SocialMedias from '@/components/SocialMedias'
const index = () => {
  return (
    <Layout>
      <div className="min-h-[50vh]">
        <div className="h-28">
        </div>
        <FieldBadges fields={softwareFields} />
        <SoftwareSections />
      </div>
      <div className="my-10 flex flex-col gap-5">
        <hr  />
        <SocialMedias />
      </div>
    </Layout>
  )
}

export default index